import React from 'react'
import { connect } from 'react-redux'

export function MoviesContainer(props) {
  return (<h1>TODO :)</h1>)
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(MoviesContainer)
