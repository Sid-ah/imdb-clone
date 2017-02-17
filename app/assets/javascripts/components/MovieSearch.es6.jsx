class Movie extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: {}
    }
    this.handleClick = this.handleClick.bind(this)
  }


  returnMovie(response) {
    this.setState({ movie: response })
  }

  handleClick(e) {
    e.preventDefault();

    let query = this.props.movie.Title
    $.ajax({
      url: 'http://www.omdbapi.com/?t=' + query,
      method: "get"
    }).done(response => {
      this.props.setMovie({ movie: response })
      this.props.changeDetail(true)
    }.bind(this))
  }

  render() {
    let url = `/cinemas/${this.props.movie.imdbID}`
    let movie = this.props.movie
    return(
      <section id='movie-container'>
        <li className="movie"/>
            <img className="pic" src={movie.Poster} alt=""/>
            <div className="movie-content">
              <p>
                <a onClick={this.handleClick} href={url}><span className="movie">{movie.Title}</span></a>
                <span className="year">{movie.Released}</span>
                <span className="director">{movie.Director}</span>
                <span className="imdbRating">{movie.imdbRating}</span>
              </p>

            </div>
      </section>
    )
  }
}
