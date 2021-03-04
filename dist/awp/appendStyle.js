import h, { render } from 'h';
import * as f from 'f';
const appendStyle = (node, style) => render(node, h("link", { rel: 'stylesheet', href: style, async: true }));
export default f.frame(appendStyle);
