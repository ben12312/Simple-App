import './Login.css';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const history = useHistory();
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  function LoginButton() {
    history.push('/')
  }

  return (
    <div className="container">
      <h1 style={{ color: 'wheat' }}>Login</h1>
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
        <div className="form-check">
          <input type="checkbox" className="form-check-input" />
          <label style={{ color: 'wheat', marginLeft: '-26cm' }} className="form-check-label">Remember me</label>
        </div>
        <button onClick={LoginButton} type="submit" className="btn btn-secondary">Login</button>
      </form>
    </div>
  );
};

export default ExploreContainer;
