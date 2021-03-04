import * as f from 'f';
const dispatchEvent = (worker, event) => worker.postMessage({ type: event.detail['@ueid'], payload: event.detail });
export default f.curry(dispatchEvent);
