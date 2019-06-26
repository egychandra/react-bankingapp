import React from 'react';
import {Link} from 'react-router-dom'

function NavBar() {
    return (
    <div>
        <nav>
            <h3>ReactJS-CRUD Banking App</h3>
            <ul>
                <li><Link to="/accts/list">Accounts</Link></li>
                <li><Link to="/trans">Add Transaction</Link></li>
            </ul>
        </nav>
    </div>
    )
};

export default NavBar;