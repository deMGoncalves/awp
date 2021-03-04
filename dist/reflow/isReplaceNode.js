import * as f from 'f';
export default f.compose(f.equal('replaceNode'), f.prop('data.type'));
