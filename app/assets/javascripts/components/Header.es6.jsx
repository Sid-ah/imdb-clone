class Header extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    let query = `http://www.omdbapi.com/?s=${this.refs.content.value}&r=json`
    $.ajax({
      url: query
    }).done(function(response) {
      this.props.returnSearch({ movies: response.Search })
    }.bind(this))
  }

  render() {
    return(
      <nav>
      <header id="top-nav">
        <div className="nav-wrapper black">
          <div id="brand">IMDB</div>
            <form id="search-form" onSubmit={this.handleSubmit}>
              <input placeholder="sid" ref='content' id="search" type="text" name="query"/>
            </form>
            <i className="fa fa-search"></i>
        </div>
      </header>
      </nav>
    )
  }
}
