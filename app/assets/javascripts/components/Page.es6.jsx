class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
    this.returnSearch = this.returnSearch.bind(this)
  }

  returnSearch(response) {
    this.setState({ movies: response })
  }

  render() {
    return(
      <div>
      <Header  returnSearch={this.returnSearch}/>
      <MoviesResult movies= { this.state.movies }/>
    </div>
    )
  }
}
