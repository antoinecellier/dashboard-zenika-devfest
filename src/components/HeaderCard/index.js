import React, { Component } from 'react';

/* components */
import { styles } from './assets/styles.scss';

export class HeaderCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { titleCard, icon } = this.props;
    return (
        <h3 className={`${styles}`}><span className={"fa " + icon}></span> &nbsp; {titleCard}</h3>
    );
  }
}
