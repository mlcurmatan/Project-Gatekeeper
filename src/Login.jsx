import { useState } from 'react';
import './Login.css';

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginFailed, setLoginFailed] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'a@a.com' && password === '1234') {
      alert('Login successful');
      setIsLoggedIn(true);
      setLoginFailed(false);
    } else {
      alert('Invalid credentials');
      setLoginFailed(true); //login fail
    }
  };

  return (
    <div className="login-page">
      <form
        className={`login-form ${loginFailed ? 'login-failed' : ''}`}  //see if login failed to change form color from white to red
        onSubmit={handleSubmit}
      >
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
