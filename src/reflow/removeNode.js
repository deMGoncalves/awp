import * as f from 'f'
import map from '@/map'

const removeNode = (event) => (
  map.get(event.data.payload['@unid']).remove(),
  map.delete(event.data.payload['@unid'])
)

export default f.curry(f.arity(1, f.frame(removeNode)))
