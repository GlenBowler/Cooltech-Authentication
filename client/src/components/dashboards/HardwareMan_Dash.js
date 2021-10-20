import React from 'react';
import './DashMan.css';

//Coponent that will show us the Hardware Manager Dashboard
class HardwareManDash extends React.Component {
constructor (props){
    super(props);
//Setting our states
this.state = {
    error: null,
    loaded: false,
    dataArr: []
    };
}

//Once our component is mount we use fetch method to fetch certain data for us
componentDidMount () {
    //Fetching from routes. Geting all the users for manager in the Hardware reviews unit
    fetch("/api/findCred?ou=Hardware Reviews")
    .then(res => res.json())
    .then(
        (result) => {
          //update the loaded state to true and setting our dataArr to the result
        this.setState ({
            loaded: true,
            dataArr: result
        });
        },
        //if there is some sorrt of error we let the user know about this error.
        //Still change the state loaded to true since we did load even if there is some sort of error
        (error) => {
        this.setState ({
            loaded: true,
            error
        });
        }
    )
}
//redering for user
render () {
    //making our state values the same as the current values
    const { error, loaded, dataArr } = this.state;

    //If there is some sort of error we let the user know
    if (error) {
    return <div>Error: {error.message}</div>;
    }
    //till the state of loaded is not changed to true we will tell user that page is still loading
    else if (!loaded) {
    return <div>Sorry for waiting. We are currentling loading</div>;
    }

    //Once everything is set render the follow info on page
    //The manager got  1 choices to choice from:
    //1: Updating/Changing the user password
    //2: See all the user data in form of table
    else {
        return <div>
            <h1 className="title">Cool Tech</h1>
            <h2 className="titleDos">Hardware Reviews Manager Side</h2>
            {/* Display table of users that manager can see where he want to change data */}
            <table>
                <tr>
                    <th>Name</th>
                    <th>Organisational Unit</th>
                    <th>Division</th>
                    <th>Role</th>
                    <th>Username</th>
                    <th>Password</th>
                </tr>
                {dataArr.map(cred => (
                <tr key={cred.id}>
                    <td>{cred.name}</td>
                    <td>{cred.ou}</td>
                    <td>{cred.division}</td>
                    <td>{cred.role}</td>
                    <td>{cred.username}</td>
                    <td>{cred.password}</td>
                </tr>
                ))}
        </table>

        {/*1: Updating the user password */}
        <div className="manager_container">
            <h3>Updating a user password:</h3>
            <form action="/updateCred">
                <label for="username">Please enter the username: </label>
                <input type="text" placeholder="Username" name="username" id="username" required/><br/><br/>
                <label for="password">Please enter the new password: </label>
                <input type="password" placeholder="Password" name="password" id="password" required/><br/><br/>            
                <button type="submit" className="button">Submit</button>
            </form>
        </div>
    </div>
    }
}
}
//exporting component
export default HardwareManDash;