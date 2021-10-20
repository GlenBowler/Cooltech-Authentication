import React from 'react';
import './DashAdmin.css';

//Coponent that will show us the News Admin Dashboard
class SoftwareAdminDash extends React.Component {
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
    //Fetching from routes. Geting all the users for admin in the News reviews unit
    fetch("/api/findCred?ou=Software Reviews")
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
    //The admin got  3 choices to choice from:
    //1: Updating/Changing the user password
    //2:Updating user organisational unit and updaing division 
    //3:Update the user role
     //4:See all the user data in form of table
    else {
        return <div>
            <h1 className="title">Cool Tech</h1>
            <h2 className="titleDos">Sofware Reviews Admin Side</h2>
            {/*4: Display table of users that admin can see where he want to change data */}
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
        <div className="admin_container">
            <h3>Updating a user password:</h3>
            <form action="/updateCred">
                <label for="username">Please enter the username: </label>
                <input type="text" placeholder="Username" name="username" id="username" required/><br/><br/>
                <label for="password">Please enter the new password: </label>
                <input type="password" placeholder="Password" name="password" id="password" required/><br/><br/>            
                <button type="submit" className="button">Submit</button>
            </form>
        </div>

        {/*2: Updating user organisational unit and updaing division  */}
        <div className="admin_container">
            <h3>Updating user organisational unit and division:</h3>
            <form action="/updateDiv">
                <label for="username">Please enter the username: </label>
                <input type="text" placeholder="Username" name="username" id="username" required/><br/><br/>
                <label for="ou">Please enter the new organisational unit:</label>
                <input type="text" placeholder="Org Unit" name="ou" id="ou" required/><br/><br/>
                <label for="division">Please enter the new division:  </label>
                <input type="text" placeholder="Division" name="division" id="division" required/><br/><br/>            
                <button type="submit" className="button">Submit</button>
            </form>
        </div>

        {/* 3: Update the user role */}
        <div className="admin_container">
            <h3>Do you want to update a user role?</h3>
            <form action="/updateRole">
                <label for="username">Please enter the username: </label>
                <input type="text" placeholder="Username" name="username" id="username" required/><br/><br/>
                <label for="userRole">Please enter the user new role </label>
                <input type="text" placeholder="User Role" name="userRole" id="userRole" required/><br/><br/>            
                <button type="submit" className="button">Submit</button>
            </form>
        </div>
    </div>
    }
}
}
//exporting component
export default SoftwareAdminDash;