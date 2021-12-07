import './App.css'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import Home from './views/Books/Home'

function App() {
  // TODO: Add routes to books & views
  return (
    <section>
      <main className="container">
        <Router>
          <header>
            <h1>Library Catalog </h1>
            <nav>
              <NavLink to="/" exact>
                {' '}
                Home{' '}
              </NavLink>
              <NavLink to="/books" exact>
                Library
              </NavLink>
            </nav>
          </header>
          <Switch>
            <Route exact path="/books/:id" component={BookDetail} />
            <Route exact path="/books" component={BookList} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </section>
  )
}

export default App
