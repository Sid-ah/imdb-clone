class Header extends React.Component {
  render() {
    return(
      <header id="top-nav">
        <div id="brand">IMDB</div>
        <form id="search-form">
          <input id="search" type="text" name="query"/>
        </form>
        <i class="fa fa-search"></i>
      </header>
    )
  }
}
