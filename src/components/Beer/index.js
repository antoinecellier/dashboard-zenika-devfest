import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/* components */
import { styles } from './assets/styles.scss';
import { HeaderCard } from '../HeaderCard';

/* actions */
import * as actionCreators from 'actions/beer';

@connect(
  state => state.beer,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Beer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getGlassServer();
  }

  render() {
    const { glassServed, incrementGlassServed,
            literServed, literRemaining, incrementLiterServed } = this.props;
    return (
      <section className={`${styles}`}>
        <HeaderCard titleCard="GitPub" icon="fa-glass" />
        <div className="glassServed">
          <h2>{glassServed} {literServed > 0.1 ? 'verres servis' : 'verre servi'} </h2>
          <button onClick={incrementGlassServed} disabled={literServed >= literRemaining}>increment</button>
        </div>
        <div className="literServed">
          <progress id="litre" value={literServed} max={literRemaining}></progress>
          <span>{literServed} {literServed > 0.1 ? 'litres servis' : 'litre servi'}</span>
        </div>
      </section>
    );
  }
}
