import * as f from 'f'

export default f.compose(f.equal('removeClassName'), f.prop('data.type'))
