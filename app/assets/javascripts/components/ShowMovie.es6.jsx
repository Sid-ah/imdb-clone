class ShowMovie extends React.Component {
  render() {
    let movie = this.props.movie
    return(
      <section id='movie-container'>
        <li className="movie"/>
            <img className="pic" src={movie.Poster} alt=""/>
            <div className="movie-content">
              <p>
                <span className="movie">{movie.Title}</span>
                <span className="year">{movie.Released}</span>
                <span className="director">{movie.Director}</span>
                <span className="imdbRating">{movie.imdbRating}</span>
              </p>
              <p>{movie.Plot}</p>
            </div>
      </section>
    )
  }
}
