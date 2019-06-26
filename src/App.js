import React from 'react'
import NavBar from './components/NavBar'
import Accounts from './components/Accounts'
import TransForm from './components/TransForm'

import {BrowserRouter as Router, Route} from 'react-router-dom'


function App() {

    return <Router>
        <NavBar/>
        <Route path="/accts/:action" component={Accounts}></Route>
        <Route path="/trans" component={TransForm}></Route>
    </Router>
}

export default App;