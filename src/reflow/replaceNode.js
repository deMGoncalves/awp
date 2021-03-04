import * as f from 'f'
import h from '@/h'
import map from '@/map'

function replaceNode (event) {
  const unid = event.data.payload['@unid']
  const oldNode = map.get(unid)
  const newNode = h(event.data.payload.node)

  oldNode.parentNode.replaceChild(newNode, oldNode)
  map.delete(unid)
}

export default f.curry(f.arity(1, f.frame(replaceNode)))
