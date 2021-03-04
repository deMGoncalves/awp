import * as f from 'f';
import h from "../h/index";
import map from "../map/index";
const appendNode = (event) => map.get(event.data.payload['@unid']).append(h(event.data.payload.node));
export default f.curry(f.arity(1, f.frame(appendNode)));
