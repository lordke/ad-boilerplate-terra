const _ = require('lodash')
const path = require('path')
const fs = require('fs')

let componentFiles = fs.readdirSync(
  path.resolve(__dirname, '../../../app/controller')
)
let dicChoices = [
  {
    name: 'controller',
    value: '',
    default: true,
  },
  ...componentFiles
    .filter(file => {
      return fs
        .statSync(path.resolve(__dirname, '../../../app/controller', file))
        .isDirectory()
    })
    .map(file => {
      return {
        name: file,
        value: file + '/',
        default: false,
      }
    }),
]
dicChoices.push()
console.log(dicChoices)

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Name:',
    validate(value) {
      if (!value.length) {
        return 'Controller must have a name.'
      }
      return true
    },
  },
  {
    type: 'list',
    name: 'subDirection',
    message: '子文件夹',
    choices: dicChoices,
  },
]
