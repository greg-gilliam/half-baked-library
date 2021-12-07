import './App.css'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import Home from './views/Books/Home'

function App() {
  // TODO: Add routes to books & views
  return (
    <section>
      <Router>
        <header>
          <h1>Library Catalog </h1>
          <nav>
            <NavLink to="/books" exact>
              Library
            </NavLink>
          </nav>
        </header>
        <main className="container">
          <Switch>
            <Route path="/books/:id" component={BookDetail} />
            <Route path="/books" component={BookList} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <footer>
          <p>Footer</p>
        </footer>
      </Router>
    </section>
  )
}

export default App
