import React from 'react'
import {Link} from 'react-router-dom'

function AccountsTable({accounts, onDeleteAccount, onAccountTypeChange}) {

    return (
    <div>
        <Link to="/accts/add">Add Account</Link>
        <br/>
        <select
            onChange={e => onAccountTypeChange(e)}
            name="accType" id="accType">
            <option value="">All</option>
            <option value="Saving">Saving</option>
            <option value="Current">Current</option>
            </select>
            <table border= "1" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Account No.</th>
                        <th>Type</th>
                        <th>Balance</th> 
                    </tr>
                </thead>
                <tbody>
                {
                    accounts.map(account=><tr key={account._id}>
                        <td>{account._id}</td>
                        <td>{account.accType}</td>
                        <td>{account.balance}</td>
                        <td><button onClick={()=>onDeleteAccount(account._id)}>Delete</button></td>
                    </tr>)
                }
                </tbody>
            </table>
    </div>
    )
}

export default AccountsTable; 