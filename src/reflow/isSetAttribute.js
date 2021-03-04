import * as f from 'f'

export default f.compose(f.equal('setAttribute'), f.prop('data.type'))
