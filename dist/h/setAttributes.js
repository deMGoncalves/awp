import * as f from 'f';
import extend from "./extend";
const setAttributes = (attributes, node) => f.always(node)(f.forEach(f.entries(attributes), extend(node)));
export default f.curry(setAttributes);
