import * as f from 'f'
import map from '@/map'

const removeEventListener = (event) =>
  (delete map.get(event.data.payload['@unid'])[event.data.payload.event])

export default f.curry(f.arity(1, f.frame(removeEventListener)))
