import * as f from 'f'
import h from '@/h'

const render = (node, event) =>
  node.append(h(event.data.payload))

export default f.curry(f.arity(2, f.frame(render)))
