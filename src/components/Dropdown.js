import React, {Component} from 'react'
import PropTypes from 'prop-types'

import { css } from 'aphrodite/no-important'
import styles from '../styles/Dropdown.style'

export default class Dropdown extends Component {
  render() {
    const {
      id,
      name,
      values,
    } = this.props
    return (
      <div>
        <label htmlFor={id}>
          {name}
          <select className={css(styles.select)} id={id} ref={node => { this.selected = node }}>
            {
              values.map((value, index) => {
                return <option value={value.move} kills={value.kills} key={index}>{value.move}</option>
              })
            }
          </select>
        </label>
      </div>
    )
  }
}

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
}


