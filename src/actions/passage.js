function fetchPassages() {
  return fetch('data/passage.json');
}

function statsPassages(passages) {
  return {
    type: 'GET_PASSAGES',
    passages
  }
}

export function getPassages() {
  return function (dispatch) {
    return fetchPassages()
      .then(r => (r.json()))
        .then(data => dispatch(statsPassages(data.passages)));
  };
}
