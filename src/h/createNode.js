import * as f from 'f'
import map from '@/map'
import appendChildren from './appendChildren'
import setAttributes from './setAttributes'

export default (payload) =>
  map.set(
    payload['@unid'],
    f.compose(appendChildren(payload.children), setAttributes(payload.attributes))(document.createElement(payload.tagName))
  )
