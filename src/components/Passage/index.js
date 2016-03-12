import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BarChart, XAxis, YAxis, CartesianGrid,
         Tooltip, Legend, Bar } from 'recharts';
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
        <BarChart width={600} height={300} data={passagesForChart}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="hour"/>
           <YAxis tickCount={6} />
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Bar dataKey="passages" fill="#8884d8" />
        </BarChart>
      </section>
    );
  }
}
