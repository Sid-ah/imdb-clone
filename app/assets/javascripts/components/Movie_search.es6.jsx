class MovieSearch extends React.Component {
  render() {
    return(
        <section id='movie-container'>
          <li className="movie"/>
              <img className="pic" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg" alt=""/>
              <div className="movie-content">
                <p>
                  <span className="movie">Batman</span>
                  <span className="year">2012</span>
                  <span className="director">- Steve P.</span>
                </p>
                <p>"Batman has not been seen for ten years. A new breed of criminal ravages Gotham City, forcing 55-year-old Bruce Wayne back into the cape and cowl. But, does he still have what it takes to fight crime in a new era?"</p>
              </div>
        </section>
    )
  }
}
