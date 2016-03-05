import Immutable  from 'immutable';

const initialState = {
  passages: []
}

export function passage(state = initialState, action) {
  switch (action.type) {
    case 'GET_PASSAGES':
      return Immutable.Map(state)
                      .set('passages', action.passages.sort())
                      .toJSON();
    default:
      return state;
  }
}
