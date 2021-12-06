import './App.css'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import Home from './views/Books/Home'

function App() {
  // TODO: Add routes to books & views
  return (
    <div className="App">
      <Router>
        <header>
          Library Catalog{' '}
          <NavLink to="/" className="App-link" exact>
            Home
          </NavLink>{' '}
          <NavLink to="/books" className="App-link" exact>
            Books
          </NavLink>
        </header>
        <BookList />
        <Switch>
          <Route path="/books/:id" component={BookDetail} />
          <Route path="/books" component={BookList} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
