// The initial state of the App
const initialState = { hashtags: [] };

export default function(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_TRENDINGS':
      return { hashtags: [['#OneBitCode', '1k'], ['#RubyOnRails', '10k']] }
    default:
      return state;
  }
}
