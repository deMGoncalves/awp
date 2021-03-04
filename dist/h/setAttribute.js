import * as f from 'f';
const setAttribute = (node, key, value) => (value && node.setAttribute(key, value));
export default f.curry(setAttribute);
