import Immutable  from 'immutable';

const initialState = {
  passages: [],
  passagesForChart: []
}

export function passage(state = initialState, action) {
  switch (action.type) {
    case 'GET_PASSAGES':
      let passagesByHours = {};
      let formatedForChart = [];
      Immutable.Seq(action.passages).map(p => p.toString()).forEach(x => {
                                              passagesByHours[x] =
                                                (passagesByHours[x] === undefined) ? 1 : passagesByHours[x] + 1;
                                            });
      Immutable.Seq(passagesByHours).forEach((v, k) => {
        formatedForChart.push({x: k, y: v})
      });
      return Immutable.Map(state)
                      .set('passagesForChart', Immutable.List(formatedForChart))
                      .toJSON();
    default:
      return state;
  }
}
