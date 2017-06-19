import moment from 'moment'
import movies from './movies'


export function getPopularMovies() {
  //
  // movies contains the results of two API requests
  //

  //
  // 1. combine the results of these requests
  // 2. sort the results FIRST by year THEN by title
  // 3. each movie object in the results needs a releaseYear attribute added
  //    this is used in src/components/movies-list.js line 25
  //

  const combinedResults = [];

  var results = [];
  results = movies.map(function(movie) {
    return movie;
  })

  for (let i = 0; i < results.length; i++) {
    for (let j = 0; j < results[i].length; j++) {
      var releaseYear = new Date(results[i][j].releaseDate);
      releaseYear = releaseYear.getFullYear();
      results[i][j]["releaseYear"] = releaseYear;
      combinedResults.push(results[i][j]);
    }
  }

  combinedResults.sort(function(a, b) {

    var aConcat = a["releaseYear"] + a["title"];
    var bConcat = b["releaseYear"] + b["title"];

    if (aConcat > bConcat) {
      return 1;
    } else if (aConcat < bConcat) {
      return -1;
    } else {
      return 0;
    }

  });

  console.log(combinedResults);



  return {
    type: 'GET_MOVIES_SUCCESS',
    movies: combinedResults
  }
}
