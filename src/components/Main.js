import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { css } from 'aphrodite/no-important'
import styles from '../styles/globals.style'

export default class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={css(styles.font, styles.background, styles.gradient)}>
        { React.cloneElement(this.props.children, this.props) }
      </div>
    )
  }
}

Main.propTypes = {
  children: PropTypes.node
}
