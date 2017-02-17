class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      detail: false,
      movie: {}
    }
    this.returnSearch = this.returnSearch.bind(this)
    this.changeDetail = this.changeDetail.bind(this)
    this.setMovie = this.setMovie.bind(this)
  }

  returnSearch(response) {
    this.setState({ movies: response.movies })
  }

  changeDetail(boolean) {
    this.setState( { detail: boolean })
  }

  setMovie(response) {
    this.setState( { movie: response } )
  }

  render() {
      if (this.state.detail) {
        return(

          <div>
            <ShowMovie movie={ this.state.movie.movie }/>
          </div>
        )
      } else {
          return(
            <div>
              <Header  returnSearch={this.returnSearch}/>
              <MoviesResult setMovie={ this.setMovie } changeDetail={ this.changeDetail } movies= { this.state.movies }/>
            </div>
          )
      }
  }
}
