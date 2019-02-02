import cssOptimization from './css-optimization'
import jsOptimization from './js-optimization'

export default {
  minimizer: [jsOptimization, cssOptimization]
}
