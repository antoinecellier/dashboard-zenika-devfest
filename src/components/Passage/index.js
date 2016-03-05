import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
    const { passages } = this.props;
    // TODO chart with passages by hours (ressource for chart => http://www.reactd3.org/)
    return (
      <section className={`${styles}`}>
      </section>
    );
  }
}
