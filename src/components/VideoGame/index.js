import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


/* components */
import { styles } from './assets/styles.scss';
import { HeaderCard } from '../HeaderCard';

/* actions */
import * as actionCreators from 'actions/videogame';

@connect(
  state => state.videogame,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class VideoGame extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getVideoGameScore();
  }

  setNewScore() {
      let newScore = Math.floor(Math.random()*999);
      this.props.getNewScore(newScore);
      newScore > this.props.highScore && this.props.getNewHighScore(newScore);
  }

  render() {
    const {highScore, lastScores, getNewScore } = this.props;
    return (
      <section>
        <HeaderCard titleCard="ZBorne" icon="fa-gamepad" />
        <div className={`${styles}`}>
          <div className="highScore">
            <h2>high score</h2>
            <Motion defaultStyle={{ score: 0}} style={{ score: spring(highScore, {stiffness: 120, damping: 85, precision: 0.1})}}>
              {val =>  {
                return <h1>{val.score.toFixed()}</h1>
              }}
            </Motion>

          </div>
          <div className="lastScores">
            <h3>Last scores :</h3>
            <ul>
              {lastScores.map((score, i) => {
                return (
                  <li key={i}>{score} pts by XXX</li>
                )
              })}
            </ul>
            <button onClick={this.setNewScore.bind(this)}>generate new score</button>
          </div>
        </div>
      </section>
    );
  }
}
