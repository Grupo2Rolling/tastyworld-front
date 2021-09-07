import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./components/Home"
import { TastyNavbar } from './components/common/navbar/TastyNavbar'
import "bootstrap/dist/css/bootstrap.css"
import { TastyFooter } from './components/common/footer/TastyFooter'
const App = () => {
    return (
        <Router>
            <TastyNavbar/>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
            <TastyFooter />
        </Router>
    )
}

export default App
