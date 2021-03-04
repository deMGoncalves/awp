import * as f from 'f';
export default f.compose(f.equal('removeAttribute'), f.prop('data.type'));
