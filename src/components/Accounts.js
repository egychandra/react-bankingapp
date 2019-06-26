import React, {useState} from 'react'
import AccountsTable from './AccountsTable'
import uuid from 'uuid'
import AccountForm from './AccountForm'
import {Route, Switch} from 'react-router-dom'

function Accounts({history}) {
    
    const [accounts, setAccounts] = useState(getAccounts())

    // we retrieved list of accounts and we are returning it back.
    function getAccounts(accType){
        const data = [
            {
                _id: 1,
                accType: "Current",
                balance: 700000
            },
            {
                _id:2,
                accType: "Saving",
                balance: 500000 
            },
        ];
        if (accType)
        return data.filter(account=> account.accType===accType);

        return data;
    }

    function handleAccountTypeChange(e) {
        const newAccounts = getAccounts(e.target.value)
        setAccounts(newAccounts)
    }

    function handleDeleteAccount(_id) {
        const newAccounts = accounts.filter(account => account._id !== _id)
        setAccounts(newAccounts)
    }

    function handleAddAccount(e, account) {
        e.preventDefault();
        const newAccounts = [...accounts];
        account._id=uuid.v4();
        newAccounts.push(account);
        setAccounts(newAccounts);
        history.push('/accts/list');
    }

    return (
        <Switch>
            <Route path="/accts/add" render={()=> <AccountForm 
                    onAddAccount={handleAddAccount}/>}></Route>
            <Route path="/accts/list" render={()=> <AccountsTable accounts={accounts} 
                                                                onDeleteAccount={handleDeleteAccount}
                                                                onAccountTypeChange={handleAccountTypeChange}/>}></Route>
        </Switch>
    )
};

export default Accounts;