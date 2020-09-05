import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
//    async function provides connection to React app
    async function grabAllUsers() {
        try {
            const res = await axios.get('http://localhost:8181/user');
            console.log(res.data);
        } catch(e) {
            console.error(e, e.message);
        }
    }

//    useEffect due to use of functional components
    useEffect(() => {
    })

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
