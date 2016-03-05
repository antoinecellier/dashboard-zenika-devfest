import React, { Component } from 'react';

import { styles } from './assets/styles.scss';
import { Beer } from 'components/Beer';
import { VideoGame } from 'components/VideoGame';
import { Passage } from 'components/Passage';

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={`${styles}`}>
        <Beer {...this.props} />
        <VideoGame {...this.props} />
        <Passage {...this.props} />
      </section>
    );
  }
}
