import * as f from 'f'
import dispatchEvent from './dispatchEvent'
import isStop from './isStop'
import isPrevent from './isPrevent'
import preventDefault from './preventDefault'
import stopPropagation from './stopPropagation'

const addEventListener = (node, key, payload) =>
  (node[key] = (event) => (
    (isStop(payload) && stopPropagation(event)),
    (isPrevent(payload) && preventDefault(event)),
    dispatchEvent(node, { ...payload, value: event.path[0].value })
  ))

export default f.curry(addEventListener)
