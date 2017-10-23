import React, { Component } from 'react'
import axios from 'axios'

export default class ScoreHistory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scores: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/winners')
      .then(r => r.data)
      .then(rows => {
        const scores = rows.reduce(function(a, v) {
          const name = v.name

          if (!a[name]) {
            a[name] = 0
          }
          a[name] += 1

          return a
        }, {})

        this.setState({
          scores
        })
      })
  }

  render() {
    const { scores } = this.state
    const scoresElements = Object.keys(scores).map((e, i) => (
      <li key={i}>{e}: {scores[e]}</li>
    ))

    return (
      <div>
        <h3>Score History</h3>
        <ul>
          {scoresElements.length? scoresElements : <li>Nothing yet here</li>}
        </ul>
      </div>
    )
  }
}
