import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { css } from 'aphrodite/no-important'
import styles from '../styles/Textfield.style'

export default class Textfield extends Component {
  render() {
    const {
      id,
      name,
    } = this.props
    return(
      <div className={css(styles.container)}>
        <label htmlFor={id}>
          {name}
          <input
            id={id}
            type="text"
            ref={node => {
              this.input = node
            }}
            className={css(styles.input)}
          />
        </label>
      </div>
    )
  }
}

Textfield.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

