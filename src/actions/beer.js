function fetchGetClassServer() {
  return fetch('data/beer.json');
}

function glassServed(beer) {
  return {
    type: 'GET_GLASS_SERVED',
    data: beer
  };
}

export function incrementLiterServed() {
  return {
    type: 'INCREMENT_LITER_SERVED'
  };
}

export function incrementGlassServed() {
  return {
    type: 'INCREMENT_GLASS_SERVED'
  };
}

export function getGlassServer() {
  return function (dispatch) {
    return fetchGetClassServer()
      .then(r => (r.json()))
        .then(data => dispatch(glassServed(data)));
  };
}
