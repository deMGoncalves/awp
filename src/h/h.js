import * as f from 'f'
import createNode from './createNode'
import createText from './createText'
import isNode from './isNode'
import isText from './isText'

export default f.cond(
  [isNode, createNode],
  [isText, createText]
)
