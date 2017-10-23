import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ScoreBoard extends Component {
  render() {
    const {
      values
    } = this.props
    if (!values) {
      return <div />
    }
    return (
      <div>
        <h3>Score</h3>
        <table>
          <thead>
            <tr>
              <th>Round</th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody>
            {
              values.map((winner, index) => {
                return(
                  <tr key={index}>
                    <td>{winner.round}</td>
                    <td>{winner.player}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )

  }
}

ScoreBoard.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.shape({
      player: PropTypes.string,
      round: PropTypes.number,
    }),
  ),
}
