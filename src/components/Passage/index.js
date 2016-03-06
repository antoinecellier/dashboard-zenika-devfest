import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BarChart } from 'react-d3';

import { HeaderCard } from '../HeaderCard';
import { styles } from './assets/styles.scss';

import * as actionCreators from 'actions/passage';

@connect(
  state => state.passage,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Passage extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPassages();
  }

  render() {
    const { passages, passagesForChart } = this.props;
    // TODO chart with passages by hours (ressource for chart => http://www.reactd3.org/)
    console.log(passagesForChart);
    let barData = [{ name: "Series A", values: passagesForChart }];
    return (
      <section className={`${styles}`}>
        <HeaderCard titleCard="Passage devant le ZStand" icon="fa-map-signs" />
          <BarChart
            data={barData}
            width={500}
            height={300}
            fill={'#3182bd'}
            title='Nombre de passages par heure'
            yAxisLabel='Nombre de passages'
            xAxisLabel='Heure de passage'
          />
      </section>
    );
  }
}
