import {
  StyleSheet,
} from 'aphrodite'

const styles = StyleSheet.create({
  button: {
    color: '#fff',
    outline: 'none',
    padding: '10px',
    display: 'block',
    margin: '10px auto',
    cursor: 'pointer',
    position: 'relative',
    border: '2px solid #fff',
    'font-size': '20px',
    'background-color': '#ffb380',
    'text-transform': 'uppercase',
    ':hover': {
      'background-color': '#cc8f66'
    }
  }
})

export default styles
