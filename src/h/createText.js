import map from '@/map'

export default (payload) =>
  map.set(
    payload['@unid'],
    document.createTextNode(payload.textContent)
  )
