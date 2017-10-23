import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'
import { css } from 'aphrodite/no-important'
import Textfield from './Textfield'
import Button from './Button'
import globals from '../styles/globals.style'

const START_ROUND_NUMBER = 1

export default class InitialScreen extends Component {
  constructor(props) {
    super(props)
    this.onStartClick = ::this.onStartClick
    this.state = {
      players: [],
    }
  }

  render() {
    if (this.state.players.length === 2) {
      const [firstPlayer, secondPlayer] = this.state.players
      if (firstPlayer && secondPlayer) {
        return (
          <Redirect to="/round"/>
        )
      }
    }
    return(
      <div className={css(globals.container)}>
        <h2 className={css(globals.headline)}>Enter Players Name</h2>
        <Textfield
          id="p1-textfield"
          name="Player 1"
          key={1}
          ref={ node => {
            this.player1 = node
          }}
        />
        <Textfield
          id="p2-textfield"
          name="Player 2"
          key={2}
          ref={ node => {
            this.player2 = node
          }}
        />
        <Button onClick={this.onStartClick} text="Start"/>
      </div>
    )
  }

  onStartClick() {
    const players = [this.player1.input.value, this.player2.input.value]
    const [ firstPlayer ] = players
    this.props.submitPlayers(players)
    this.props.nextPlay(firstPlayer, START_ROUND_NUMBER, false)
    this.setState({ players })
  }
}

InitialScreen.propTypes = {
  submitPlayers: PropTypes.func,
  nextPlay: PropTypes.func,
}
