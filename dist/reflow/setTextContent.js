import * as f from 'f';
import map from "../map/index";
const setTextContent = (event) => (map.get(event.data.payload['@unid']).textContent = event.data.payload.textContent);
export default f.curry(f.arity(1, f.frame(setTextContent)));
