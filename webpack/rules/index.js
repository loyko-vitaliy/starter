const tsRules = require('./ts')
const pugRules = require('./pug')
const scssRules = require('./scss')
const fontRules = require('./font')
const imageRules = require('./image')
const svgRules = require('./svg')

module.exports = mode => [tsRules, pugRules, scssRules(mode), fontRules, imageRules, svgRules]
