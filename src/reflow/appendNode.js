import * as f from 'f'
import h from '@/h'
import map from '@/map'

const appendNode = (event) =>
  map.get(event.data.payload['@unid']).append(h(event.data.payload.node))

export default f.curry(f.arity(1, f.frame(appendNode)))
