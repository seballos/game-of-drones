import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { css } from 'aphrodite/no-important'
import globals from '../styles/globals.style'
import Button from './Button'

export default class WinnerScreen extends Component {
  constructor() {
    super()
    this.onPlayAgain = ::this.onPlayAgain
  }

  render() {
    return (
      <div className={css(globals.container)}>
        <h2>We have a WINNER!!</h2>
        <h2>{`${this.props.rounds.winner} is the new EMPEROR!`}</h2>
        <Link to="/" onClick={this.onPlayAgain} className={css(globals.link)}><Button onClick={this.onPlayAgain} text="Play Again" /></Link>
      </div>
    )
  }

  onPlayAgain() {
    this.props.playAgain()
  }
}

WinnerScreen.propTypes = {
  rounds: PropTypes.shape({
    winner: PropTypes.string
  }),
  playAgain: PropTypes.func,
}
