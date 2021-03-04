import * as f from 'f';
export default f.compose(f.equal('removeNode'), f.prop('data.type'));
