import { useState } from 'react';
import Login from './Login';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (
        <div>
        <Login setIsLoggedIn={setIsLoggedIn} />
          useEffect(() = {console.log('App rendered or isLoggedIn changed:', isLoggedIn)}, [isLoggedIn]);
        </div>
      ) : (
        <div>
        <h2>Welcome</h2>
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        useEffect(() = {console.log('App rendered or isLoggedIn changed:', isLoggedIn)}, [isLoggedIn]);
        </div>
      )}
    </div>
  );
}

export default App;