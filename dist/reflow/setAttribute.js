import * as f from 'f';
import map from "../map/index";
const setAttribute = (event) => map.get(event.data.payload['@unid']).setAttribute(event.data.payload.key, event.data.payload.value);
export default f.curry(f.arity(1, f.frame(setAttribute)));
