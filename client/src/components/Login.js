import React from 'react'
import Button from 'react-bootstrap/Button';
import './Login.css';
//Coponent to login
function Login () {
    return <div className="login">
           
            <h1 className="title">Cool Tech</h1>
            <div className="login_container">
                <form action="/findUser">
                    <label for="username">Please enter your username </label><br/><br/>
                    <input type="text" placeholder="Username" name="username" id="username" required/><br/><br/>
                    <label for="password">Please enter your password: </label><br/><br/>
                    <input type="password" placeholder="Password" name="password" id="password" required/><br/><br/>
                    <Button  type="submit" className="button">Login</Button>
                </form>
            </div>
        </div>
    }
//Exporting login
export default Login