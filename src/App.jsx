import { useState, useEffect } from 'react';
import Login from './Login';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  useEffect(() => {
    console.log('App rendered or isLoggedIn changed:', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div className="app-container">
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <div className="welcome-container">
          <h2>Welcome</h2>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
