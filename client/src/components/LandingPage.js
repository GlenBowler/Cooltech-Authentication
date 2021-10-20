import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';

function LandingPage (props) {
    return <div className="landing">
            <h1 className="title">Cool Tech</h1>
            
            <div className = "landing_container">
            <h3 >Sign Up:</h3>
            <form action="/addUser">
                <label for="name">Enter your first and last name: </label>
                <input type="text" placeholder="Name" name="name" id="name" required/><br/><br/>
                <label for="ou">Enter your Organizational Unit: </label>
                <input type="text" placeholder="Organizational Unit" name="ou" id="ou" required/><br/><br/>
                <label for="division">Enter your division: </label>
                <input type="text" placeholder="Division" name="division" id="division" required/><br/><br/>
                <label for="username">Enter your username: </label>
                <input type="text" placeholder="Username" name="username" id="username" required/><br/><br/>
                <label for="password">Enter your password: </label>
                <input type="password" placeholder="Password" name="password" id="password" required/><br/><br/>
                
                <Button variant="primary" type="submit" className="button">Submit</Button>
            </form>
            </div>

            <div className="landing_container">
            <p>If you are already sign-up please select login</p>
            <Button variant="warning" type="sumbit" className="button" href="/login">Login</Button>
            </div>
        </div>
    }

export default LandingPage