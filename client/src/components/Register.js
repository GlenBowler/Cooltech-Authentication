import React from 'react';

//Component for registering new user
class Register extends React.Component {
constructor (props){
    super(props);
    this.state = {
    error: null,
    loaded: false,
    dataArr: []
    };
}

//Once our component is mount we use fetch method to fetch certain data for us
componentDidMount () {
    //declaring var param so we can get data that user entered and store to sistem on later phase
    const param = new URLSearchParams(window.location.search);
    const name = param.get('name')
    const ou = param.get('ou')
    const division = param.get('division')
    const username = param.get('username')
    const password = param.get('password')

    //fetch the route that we will be using
    fetch("/api/addUser?name=" + name +"&ou=" + ou +"&division=" + division +"&username=" + username +"&password=" + password + "")
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
//Rendering
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
    else {
        return <div>
            {dataArr.msg}
            <br/>
            <a class="linkButton" href="/login">Login</a>
        </div>;
    }
}
}
//export component
export default Register;