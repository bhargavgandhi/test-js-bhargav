import React from 'react'
import { connect } from 'react-redux'

export function MoviesContainer(props) {
  return (
    <article className="movieLists">
      {
        props.movies.map(function(Object, i) {
          return <figure className="movieListItem" key={i}>
            <div className="movieImage">
              <img src={Object.image} alt={Object.title} />
            </div>
            <div className="movieDetails">
                  <h1>{Object.title}</h1>
                  <h2>Price: ${Object.price}</h2>
                  <p>Year: {Object.releaseYear}</p>
            </div>
          </figure>
        })
      }
    </article>
)
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(MoviesContainer)
