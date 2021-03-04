import * as f from 'f'

const start = (worker, attrs) =>
  worker.postMessage({ type: 'start', attrs: { ...attrs } })

export default f.curry(start)
