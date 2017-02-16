class MoviesResult extends React.Component {
  render () {
    return(
      <section id="tweets-container">
        <h3>Movies</h3>
        <ul>
          {this.props.movies.map((movie, i) => {return <Movie movie={movie} key={i} />})
          }
        </ul>
      </section>
    )
  }
}
