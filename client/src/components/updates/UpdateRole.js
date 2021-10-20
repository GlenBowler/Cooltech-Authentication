import React from 'react';

//Component for updating division
class UpdateRole extends React.Component {
constructor (props){
    super(props);
    this.state = {
    error: null,
    loaded: false,
    data: ''
    };
}

//Once our component is mount we use fetch method to fetch certain data for us
componentDidMount () {
    const param = new URLSearchParams(window.location.search);
    const username = param.get('username')
    const role = param.get('role')

    //Fetching from routes. Geting all the users for admin in the Hardware reviews unit
    fetch("/api/updateRole?username=" + username +"&role=" + role +"")
    .then(res => res.text())
    .then(
        (result) => {
          //update the loaded state to true and setting our data to the result
        this.setState ({
            loaded: true,
            data: result
        });
        console.log(result)
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

////redering for user
render () {
    //making our state values the same as the current values
    const { error, loaded, data } = this.state;

    //If there is some sort of error we let the user knows
    if (error) {
    return <div>Error: {error.message}</div>;
    }
    ///till the state of loaded is not changed to true we will tell user that page is still loading
    else if (!loaded) {
    return <div>Sorry for waiting. We are currentling loading</div>;
    }
    ///Once everything is set render the follow info on page
    else {
        return <div>
        <link rel="stylesheet" href="/stylesheets/style.css"/>
        <p>{data}</p>
        </div>
    }
}
}
//exporting components
export default UpdateRole;