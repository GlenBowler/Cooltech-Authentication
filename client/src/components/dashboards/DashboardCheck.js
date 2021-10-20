import React from "react";
import HardwareAdDash from './HardwareAd_Dash';
import HardwareManDash from './HardwareMan_Dash';
import HardwareUsDash from './HardwareUs_Dash';
import NewsAdminDash from './NewsAd_Dash';
import NewsManDash from './NewsMan_Dash';
import NewsUsDash from './NewsUs_Dash';
import OpinionAdDash from './OpinionAd_Dash';
import OpinionManDash from './OpinionMan_Dash';
import OpinionUsDash from './OpinionUs_Dash';
import SoftwareAdDash from './SoftwareAd_Dash';
import SoftwareManDash from './SoftwareMan_Dash';
import SoftwareUsDash from './SoftwareUs_Dash';

//Component that will check that we rendering correct dashboard for the user depending on their role and unit
class DashboardCheck extends React.Component {
    constructor (props){
    super(props);
      //Setting our states
    this.state = {
        error: null,
        loaded: false,
        token: 'Bearer ' + this.props.token,
        dataArr: []
    };
    }

    //Once our component is mount we use fetch method to fetch certain data for us
    componentDidMount () {
    fetch("/api/cred", {method: 'GET',  headers : {Authorization: this.state.token}})
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
    //rendering
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
    
    else {
        //Rendering the correct news reviews to the dashboard
        if (dataArr.role === "NewsAdmin") {
            return <div>
                <NewsAdminDash />
            </div>
        }
        else if (dataArr.role === "NewsManager") {
            return <div>
                <NewsManDash />
            </div>
        }
        else if (dataArr.role === "NewsUser") {
            return <div>
                <NewsUsDash />
            </div>
        }
        //Rendering the correct software reviews to the dashboard
        else if (dataArr.role === "SoftAdmin") {
            return <div>
                <SoftwareAdDash />
            </div>
        }
        else if (dataArr.role === "SoftManager") {
            return <div>
                <SoftwareManDash />
            </div>
        }
        else if (dataArr.role === "SoftUser") {
            return <div>
                <SoftwareUsDash />
            </div>
        }

        //Rendering the correct Hardware reviews to the dashboard
        else if (dataArr.role === "HardAdmin") {
            return <div>
                <HardwareAdDash />
            </div>
        }
        else if (dataArr.role === "HardManager") {
            return <div>
                <HardwareManDash />
            </div>
        }
        else if (dataArr.role === "HardUser") {
            return <div>
                <HardwareUsDash />
            </div>
        }

        //Rendering the correct Opinion reviews to the dashboard
        else if (dataArr.role === "OpAdmin") {
            return <div>
                <OpinionAdDash />
            </div>
        }
        else if (dataArr.role === "OpManager") {
            return <div>
                <OpinionManDash />
            </div>
        }
        else if (dataArr.role === "OpUser") {
            return <div>
                <OpinionUsDash />
            </div>
        }

        //if user is not assignied to any role let user know 
        else {
            return <div>
            <h1>Cool Tech</h1>
            <p>You dont have the correct role.</p>
        </div>
        }

    }
    }
}
//export the component
export default DashboardCheck;