class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: []
    }
  }

  render() {
    return(
      <div>
      <Header />
      <MovieSearch movie={this.state.movie}/>
    </div>
    )
  }
}
