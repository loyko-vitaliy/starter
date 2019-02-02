import fontRules from './font'
import imageRules from './image'
import pugRules from './pug'
import scssRules from './scss'
import svgRules from './svg'
import tsRules from './ts'

export default (mode: string) => ({
  rules: [tsRules, pugRules, scssRules(mode), fontRules, imageRules, svgRules]
})
