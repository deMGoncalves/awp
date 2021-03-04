import * as f from 'f'

const createBlob = (url) =>
  new Blob([`importScripts('${url}')`], { type: 'application/javascript' })

export default f.memoize(createBlob)
