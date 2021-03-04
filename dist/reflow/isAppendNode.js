import * as f from 'f';
export default f.compose(f.equal('appendNode'), f.prop('data.type'));
