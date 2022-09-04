const { Generator } = require('@umijs/utils')
const path = require('path')
// const kebabCase = require('kebab-case')

class PkgGenerator extends Generator {
  constructor(prop) {
    super(prop)
    this.options = prop
  }

  async writing() {
    // const kebabCaseName = kebabCase(this.name).replace(/^\-/, '')
    this.copyDirectory({
      context: {
        suffix: this.options.suffix,
        // kebabCaseName,
      },
      path: path.join(this.cwd, './templates/package'),
      target: path.join(this.cwd, `./packages/${this.options.name}`),
    })
  }
}

module.exports = PkgGenerator
