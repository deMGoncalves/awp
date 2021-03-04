import h, { render } from 'h'
import * as f from 'f'

const appendStyle = (node, style) =>
  render(node, <link rel='stylesheet' href={style} async />)

export default f.frame(appendStyle)
