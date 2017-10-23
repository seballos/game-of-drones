import {
  StyleSheet,
} from 'aphrodite'

const styles = StyleSheet.create({
  headline: {
    color: '#008fbf'
  },
  container: {
    display: 'flex',
    'align-items': 'center',
    'flex-direction': 'column'
  },
  font: {
    'font-family': 'Verdana, Geneva, sans-serif',
    'font-size': '18px',
  },
  gradient: {
    background: 'linear-gradient(to right, #e9dfc4 0%, #e9dfc4 1%, #ede3c8 2%, #ede3c8 24%, #ebddc3 25%, #e9dfc4 48%, #ebddc3 49%, #e6d8bd 52%, #e6d8bd 53%, #e9dbc0 54%, #e6d8bd 55%, #e6d8bd 56%, #e9dbc0 57%, #e6d8bd 58%, #e6d8bd 73%, #e9dbc0 74%, #e9dbc0 98%, #ebddc3 100%)',
  },
  background: {
    margin: '0 auto',
    height: '220px',
    width: '50%',
    background: '#e9dfc4',
    'background-size': '60px',
    'background-repeat': 'repeat',
  },
  link: {
    'text-decoration': 'none',
  }
})

export default styles
