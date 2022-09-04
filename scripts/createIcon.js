const fs = require('fs')
const path = require('path')
const { argv } = require('yargs')

const IconGenerator = require('./Generators/IconGenerator')
const PkgGenerator = require('./Generators/PkgGenerator')

const { target = 'test', default: isDefault = false } = argv
const cwd = process.cwd()

// 图标库
// https://github.com/iconify/collections-json
const collections = {
  antd: require('@iconify/json/json/ant-design.json'),
  ionic: require('@iconify/json/json/ion.json'),
  bootstrap: require('@iconify/json/json/bi.json'),
  eva: require('@iconify/json/json/eva.json'),
  mono: require('@iconify/json/json/mono-icons.json'),
  bytesize: require('@iconify/json/json/bytesize.json'),
  'flat-color': require('@iconify/json/json/flat-color-icons.json'),
  'flat-ui': require('@iconify/json/json/flat-ui.json'),
}

const targetCollection = collections[target]
const linebreak = `
`

function htmlToJSX(html) {
  const jsx = html.replace(/([\w-]+)=/g, i => {
    if (i === 'viewBox=') return i
    if (i === 'data-name=') return i
    return i
      .split('-')
      .map((i, idx) => (idx === 0 ? i.toLowerCase() : i[0].toUpperCase() + i.slice(1).toLowerCase()))
      .join('')
  })
  return jsx
}

if (!targetCollection) {
  console.log('无匹配图标集')
} else {
  run() 
}

async function run() {
  await new PkgGenerator({
    suffix: isDefault ? '' : `-${target}`,
    name: target,
    cwd,
  }).run()

  const casingFilterMap = {}
  const collection = Object.entries(targetCollection.icons)
    .map(([rawName, { body }]) => {
      let name = rawName
        .replace(/^[a-z]/, letter => letter.toUpperCase())
        .replace(/-[a-z]/g, letter => letter.replace('-', '').toUpperCase())
        .replace(/-/g, '')

      if (/^[0-9]+$/.test(name)) {
        name = `Number${name}`
      }

      return [name, htmlToJSX(body)]
    })
    .reduce((arr, [name, content]) => {
      const lowerCaseName = name.toLowerCase()
      let count = 1
      if (lowerCaseName in casingFilterMap) {
        count = casingFilterMap[lowerCaseName].count + 1
      }

      casingFilterMap[lowerCaseName] = Object.assign({ name }, casingFilterMap[lowerCaseName] || {}, { count })

      return [...arr, [`${casingFilterMap[lowerCaseName].name}${count !== 1 ? count : ''}`, content]]
    }, [])
  await Promise.all(
    collection.map(async ([name, body]) => {
      return await new IconGenerator({
        name,
        body,
        group: target,
        cwd,
        width: targetCollection.width,
        height: targetCollection.height,
      }).run()
    }),
  )

  fs.writeFileSync(
    path.join(cwd, `./packages/${target}/src/Icon.tsx`),
    fs.readFileSync(path.join(cwd, './templates/Icon.tsx')),
    {
      encoding: 'utf-8',
    },
  )

  const exportContent = [
    `import Icon from './Icon'`,
    `export default Icon`,
    `export { default as Icon } from './Icon'`,
    ...collection
      .sort(([preName], [nextName]) => (nextName > preName ? -1 : 1))
      .map(([name]) => `export { default as ${name} } from './${name}'`),
  ].join(linebreak)

  fs.writeFileSync(path.join(cwd, `./packages/${target}/src/index.ts`), exportContent, {
    encoding: 'utf-8',
  })
}


