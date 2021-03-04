import * as f from 'f';
const dispatchEvent = (node, detail) => node.dispatchEvent(new CustomEvent('awp:event', { bubbles: true, detail }));
export default f.idle(dispatchEvent);
