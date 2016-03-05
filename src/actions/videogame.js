function fetchVideoGameScores() {
  return fetch('data/videogame.json');
}

function videoGameScore(scores) {
  return {
    type: 'GET_VIDEOGAME_SCORE',
    data: scores
  };
}

export function getNewHighScore(score) {
    return {
      type: 'GET_NEW_HIGH_SCORE',
      newHighScore: score
    }
}

export function getNewScore(score) {
  return {
    type: 'GET_NEW_SCORE',
    newScore: score
  }
}

export function getVideoGameScore() {
  return function (dispatch) {
    return fetchVideoGameScores()
      .then(r => (r.json()))
        .then(data => dispatch(videoGameScore(data)));
  };
}
