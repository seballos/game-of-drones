import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'
import axios from 'axios'

import { css } from 'aphrodite/no-important'
import styles from '../styles/Round.style'
import globals from '../styles/globals.style'

import Button from './Button'
import Dropdown from './Dropdown'
import ScoreBoard from './ScoreBoard'
import defaultConfig from '../config/config'

export default class Round extends Component {
  constructor() {
    super()
    this.handleMovement = ::this.handleMovement
  }

  render() {
    const {
      currentRound: {
        roundNumber,
        player,
      },
      winners,
      wins,
    } = this.props.rounds
    for(const win in wins) {
      if (wins[win] === 3) {
        this.props.winner(win)
        axios.post('http://localhost:3000/winners', {
          name: win
        })
        return <Redirect to="/winner" />
      }
    }
    return (
      <div className={css(styles.container)}>
        <div>
          <h2 className={css(globals.headline)}>{`Round ${roundNumber}`}</h2>
          <h3 className={css(styles.playerHead)}>{player}</h3>
          <Dropdown
            values={defaultConfig.moves}
            id="pDropDown"
            name="Select Move"
            key={Date.now()}
            ref={ node => {
              this.selection = node
            }}
          />
          <Button onClick={this.handleMovement} text="OK" />
        </div>
        <ScoreBoard values={winners}/>
      </div>
    )
  }

  handleMovement() {
    const [selectedOption] = this.selection.selected.selectedOptions
    const move = {
      value: selectedOption.value,
      kills: selectedOption.getAttribute('kills'),
    }
    let nextPlayer
    let nextRound
    const {
      currentRound: {
        roundNumber,
        player,
        upRound,
      },
      currentMove
    } = this.props.rounds
    const [firstPlayer, secondPlayer] = this.props.players
    if (upRound) {
      nextRound = roundNumber + 1
      nextPlayer = firstPlayer
      const winner = Round.calculateWinner(currentMove, {player, selection: move})
      this.props.winnerRound(roundNumber, winner)
    } else {
      nextRound = roundNumber
      nextPlayer = secondPlayer
    }

    this.props.playerMove(player, move, roundNumber)
    this.props.nextPlay(nextPlayer, nextRound, !upRound)
  }

  static calculateWinner(firstMove, secondMove) {
    const firstSelection = firstMove.selection
    const secondSelection = secondMove.selection
    if (firstSelection.kills === secondSelection.value) {
      return firstMove.player
    } else if (secondSelection.kills === firstSelection.value) {
      return secondMove.player
    }
    return
  }
}

Round.propTypes = {
  players: PropTypes.array,
  rounds: PropTypes.shape({
    currentRound: PropTypes.shape({
      roundNumber: PropTypes.number.isRequired,
      player: PropTypes.string.isRequired,
      upRound: PropTypes.bool.isRequired,
    }),
    currentMove: PropTypes.object,
    winners: PropTypes.arrayOf(
      PropTypes.shape({
        player: PropTypes.string,
        round: PropTypes.number,
      }),
    ),
    wins: PropTypes.object,
  }),
  nextPlay: PropTypes.func,
  playerMove: PropTypes.func,
  winnerRound: PropTypes.func,
  winner: PropTypes.func,
}
