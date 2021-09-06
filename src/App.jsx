import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./components/Home"
import { TastyNavbar } from './components/common/navbar/TastyNavbar'
import "bootstrap/dist/css/bootstrap.css"
const App = () => {
    return (
        <Router>
            <TastyNavbar/>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    )
}

export default App
