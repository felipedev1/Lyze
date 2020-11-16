import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Details from './pages/Details'
import Home from './pages/Home'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/LTV/CAC">
          <Details />
        </Route>
      </Switch>
    </BrowserRouter>

  )
}

export default Routes