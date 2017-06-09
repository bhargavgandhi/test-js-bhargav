import React from 'react'
import GetMoviesBtn from './get-movies-btn'
import MoviesContainer from './movies-container'

export function App(props) {
  return (
    <main>
      <h1>Welcome to the Doorsteps Movies!</h1>
      <GetMoviesBtn />
      <MoviesContainer />
    </main>
  )
}

export default App
