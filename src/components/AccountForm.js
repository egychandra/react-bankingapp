import React, {useState} from 'react'

function AccountForm({onAddAccount}) {

    const [account, setAccount] = useState({})

    function handleChange(e) {
        const newAccount = {...account};
        newAccount[e.target.name] = e.target.value;
        setAccount(newAccount);
    }

    return (
        <div>
            <h3>Add Account</h3>
            <form onSubmit={e=>onAddAccount(e, account)}>
                <label htmlFor="accType">Account Type</label>
                <select 
                    onChange={e=>handleChange(e)}
                    name="accType" id="accType" required>

                    <option></option>
                    <option value="Saving">Saving</option>
                    <option value="Current">Current</option>
                </select>

                <label htmlFor="balance">Balance</label>
                <input 
                    onChange={e=>handleChange(e)}
                    type="number" name="balance" id="balance" required/>

                    <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default AccountForm;