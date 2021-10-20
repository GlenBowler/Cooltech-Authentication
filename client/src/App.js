
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UpdateCredentails from "./components/updates/UpdateCredentails";
import UpdateDiv from "./components/updates/UpdateDiv";
import UpdateRole from "./components/updates/UpdateRole";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact={true} path="/" component={LandingPage} />
        <Route exact={false} path="/addUser" component={Register} />
        <Route exact={true} path="/login" component={Login} />
        <Route exact={false} path="/findUser" component={Dashboard} />  
        <Route exact={false} path="/updateCred" component={UpdateCredentails} />
        <Route exact={false} path="/updateDiv" component={UpdateDiv} />
        <Route exact={false} path="/updateRole" component={UpdateRole} />
      </BrowserRouter>

    </div>
  );
}

export default App;
