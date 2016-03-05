import Immutable  from 'immutable';

const initialState = {
  glassServed: 0,
  literServed: 0,
  literRemaining: 30
}

export function beer(state = initialState, action) {
  switch (action.type) {
    case 'GET_GLASS_SERVED':
      return Immutable.Map(state)
                      .set('glassServed', action.data.glassServed)
                      .set('literServed', action.data.literServed)
                      .set('literRemaining', action.data.literRemaining)
                      .toJSON();
    case 'INCREMENT_GLASS_SERVED':
      return Immutable.Map(state)
                      .set('glassServed', state.glassServed + 1)
                      .set('literServed', state.literServed + 0.25)
                      .set('literRemaining', state.literRemaining - 0.25)
                      .toJSON();
    case 'INCREMENT_LITER_SERVED':
      return Immutable.Map(state)
                      .set('literServed', state.literServed + 0.25)
                      .set('literRemaining', state.literRemaining - 0.25)
                      .toJSON();
    default:
      return state;
  }
}
