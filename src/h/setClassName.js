import * as f from 'f'

const setClassName = (node, _key, value) =>
  (node.className = f.join(f.flatten(f.concat([], value)), ' '))

export default f.curry(setClassName)
