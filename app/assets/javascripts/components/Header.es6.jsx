class Header extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    let query = this.refs.content.value
    $.ajax({
      url: `/cinemas/search/${query}`
    }).done(response => {
      debugger;
    })
  }

  render() {
    return(
      <header id="top-nav">
        <div id="brand">IMDB</div>
        <form id="search-form" onSubmit={this.handleSubmit}>
          <input placeholder="sid" ref='content' id="search" type="text" name="query"/>
        </form>
        <i class="fa fa-search"></i>
      </header>
    )
  }
}
