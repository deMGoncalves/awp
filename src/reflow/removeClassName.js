import * as f from 'f'
import map from '@/map'

const removeClassName = (event) =>
  (map.get(event.data.payload['@unid']).className = '')

export default f.curry(f.arity(1, f.frame(removeClassName)))
