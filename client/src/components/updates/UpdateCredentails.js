import React from 'react';

//Component for updating credetails
class UpdateCredentails extends React.Component {
constructor (props){
    super(props);
    //Setting our states
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
    const password = param.get('password')

    //Fetching from routes. Geting all the users for admin in the Hardware reviews unit
    fetch("/api/updateCred?username=" + username +"&password=" + password +"")
    .then(res => res.text())
    .then(
        (result) => {
        //update the loaded state to true and setting our dataArr to the result
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

//redering for user
render () {
    //making our state values the same as the current values
    const { error, loaded, data } = this.state;

    //If there is some sort of error we let the user know
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    //till the state of loaded is not changed to true we will tell user that page is still loading
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


export default UpdateCredentails;