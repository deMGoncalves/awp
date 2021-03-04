import * as f from 'f';
export default f.compose(f.equal('addEventListener'), f.prop('data.type'));
