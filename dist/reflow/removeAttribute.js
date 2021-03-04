import * as f from 'f';
import map from "../map/index";
const removeAttribute = (event) => map.get(event.data.payload['@unid']).removeAttribute(event.data.payload.key);
export default f.curry(f.arity(1, f.frame(removeAttribute)));
