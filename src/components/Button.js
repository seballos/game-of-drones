import React from 'react'
import PropTypes from 'prop-types'

import { css } from 'aphrodite/no-important'
import styles from '../styles/Button.style'


const Button = ({text, onClick }) => (
  <button onClick={onClick} className={css(styles.button)}>{text}</button>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

export default Button
