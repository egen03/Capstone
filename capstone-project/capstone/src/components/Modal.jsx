import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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


export default Login;