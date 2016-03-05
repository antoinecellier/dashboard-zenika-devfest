import Immutable  from 'immutable';

const initialState = {
  highScore: 0,
  lastScores: []
};

export function videogame(state = initialState, action) {
  switch (action.type) {
    case 'GET_VIDEOGAME_SCORE' :
      return Immutable.Map(state)
                    .set('highScore', action.data.highScore)
                    .set('lastScores', action.data.lastScores)
                    .toJSON();
    case 'GET_NEW_SCORE' :
      return Immutable.fromJS(state)
                      .updateIn(['lastScores'], list => list.delete(-1)
                                                            .insert(0, action.newScore))
                      .toJSON();
    case 'GET_NEW_HIGH_SCORE' :
      return Immutable.Map(state)
                      .set('highScore', action.newHighScore)
                      .toJSON();
    default:
      return state;
  }
}
