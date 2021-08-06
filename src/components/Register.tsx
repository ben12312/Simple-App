import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export default function Register() {
    const history = useHistory();
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    function registerButton() {
        history.push('/login')
    }

    return (
        <div className="container">
            <h1 style={{ color: 'wheat' }}>Register</h1>
            <form>
                <div className="form-group">
                    <label style={{ color: 'wheat' }}>Email address</label>
                    <input onChange={(event) => setEmail(event.target.value)} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label style={{ color: 'wheat' }}>Password</label>
                    <input onChange={(event) => setPassword(event.target.value)} type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label style={{ color: 'wheat' }}>Repeat password</label>
                    <input type="password" className="form-control" placeholder="Retype password" />
                </div>
                <button onClick={registerButton} style={{ marginTop: '1cm' }} type="submit" className="btn btn-secondary">Register</button>
            </form>
        </div>
    )
}