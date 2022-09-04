const { Generator } = require('@umijs/utils')
const path = require('path')
// const kebabCase = require('kebab-case')

class IconGenerator extends Generator {
  constructor(prop) {
    super(prop)
    this.options = prop
  }

  async writing() {
    // const kebabCaseName = kebabCase(this.name).replace(/^\-/, '')

    const copyTpl = target => {
      this.copyTpl({
        templatePath: path.join(this.cwd, './templates/icon.tsx.tpl'),
        context: {
          ...this.options,
          // kebabCaseName,
        },
        target,
      })
    }

    copyTpl(
      path.join(
        this.cwd,
        `./packages/${this.options.group}/src/${this.options.name}.tsx`,
      ),
    )
  }
}

module.exports = IconGenerator
