class MovieSearch extends React.Component {
  render() {
    let movie = this.props.movie
    return(
        <section id='movie-container'>
          <li className="movie"/>
              <img className="pic" src={movie.poster} alt=""/>
              <div className="movie-content">
                <p>
                  <span className="movie">{movie.title}</span>
                  <span className="year">{movie.released}</span>
                  <span className="director">{movie.director}</span>
                  <span className="imdbRating">{movie.imdbRating}</span>
                </p>
                <p>{movie.plot}</p>
              </div>
        </section>
    )
  }
}
