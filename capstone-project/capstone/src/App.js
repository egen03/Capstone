import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Home from './components/Home';
import Bracelets from './components/Bracelets';
import Earrings from './components/Earrings';
import Necklace from './components/Necklace';
import Modal from './components/Modal';
  
  export function App() {
    return (
      <Router>
        <div>
        <Nav className="justify-content-end" activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
  <Nav.Item>
    <Nav.Link href="/home" activeKey="/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/bracelets">Bracelets</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/earrings">Earrings</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/necklace" >Necklace</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="./modal"> Login</Nav.Link>
  </Nav.Item>
</Nav>
  
          <Switch>
              
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/bracelets">
              <Bracelets />
            </Route>
            <Route path="/earrings">
              <Earrings />
            </Route>
            <Route path="/necklace">
              <Necklace />
            </Route>
            <Route path="/modal">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

//////////////////// LOGIN FORM ////////////////////////// 


function Login() {
    const [input, setInput] = useState({username: "", password: ""});

//    async function provides connection to React app. Make a call to grab all users
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
        grabAllUsers();
    }, [])

    function handleChange(e) {
        const { value, id } = e.target;
        console.log(value, id);
        setInput({ ...input, [id]: value });
    }

// Submit button functionality
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8181/user', input);
            console.log(res.data);
        } catch(e) {
            console.error(e, e.message);
        }
    }

  return (
    
    <div className="App">
      <header className="App-header"> 

        <div className="Form">
        <form onChange={ (e) => handleChange(e) } onSubmit={ (e) => handleSubmit(e)} >
        <label>
            username:
            <input type="text" />
        </label>

         <label>
             password:
             <input type="password" id="password" />
         </label>



              <input type="submit" />


        </form>
        </div>
      </header>
     </div>
  );
}

export default App;
