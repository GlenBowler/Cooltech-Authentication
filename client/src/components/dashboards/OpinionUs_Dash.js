import React from 'react';
import './DashUs.css';
//Coponent that will show us the Opinion User Dashboard
class OpinionUsDash extends React.Component {
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
    //Fetching from routes. Geting all the users for user in the Opinion reviews unit
    fetch("/api/findCred?ou=Opinion Reviews")
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
    //The user got  1 choices to choice from:
    //1: Updating/Changing the user password
    else {
        return <div>
            <link rel="stylesheet" href="/stylesheets/style.css"/>
            <h1 className="title">Cool Tech</h1>
            <h2 className="titleDos">Opinion Reviews User Side</h2>
            {/* Display table of users that user can see where he want to change data */}
            <table>
                <tr>
                    <th>Name</th>
                    <th>Organisational Unit</th>
                    <th>Division</th>
                    <th>Role</th>
                    <th>Username</th>
                </tr>
                {dataArr.map(cred => (
                <tr key={cred.id}>
                    <td>{cred.name}</td>
                    <td>{cred.ou}</td>
                    <td>{cred.division}</td>
                    <td>{cred.role}</td>
                    <td>{cred.username}</td>
                </tr>
                ))}
        </table>
        </div>
    }
}
}
//exporting component
export default OpinionUsDash;