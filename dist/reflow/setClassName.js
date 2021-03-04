import * as f from 'f';
import map from "../map/index";
const setClassName = (event) => (map.get(event.data.payload['@unid']).className = event.data.payload.value);
export default f.curry(f.arity(1, f.frame(setClassName)));
