import * as f from 'f';
export default f.compose(f.equal('removeEventListener'), f.prop('data.type'));
