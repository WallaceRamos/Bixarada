import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';  


import Home from './pages/Home';
import Logon from './pages/Logon';
import RegisterNgo from './pages/RegisterNgo';
import RegisterUser from './pages/RegisterUser';
import ProfileNgo from './pages/ProfileNgo';
import ProfileUser from './pages/ProfileUser';
import NewIncident from './pages/NewIncident';
import Incidents from './pages/Incidents';
import IncidentDetail from './pages/IncidentDetail';

export default function Routes() {
  return (
    <BrowserRouter>
       <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/logon" exact component={Logon} />
         <Route path="/registerUser" component={RegisterUser} />
         <Route path="/registerNgo" component={RegisterNgo} />
         
         <Route path="/incidents" component={Incidents} />
         <Route path="/incidentDetail" component={IncidentDetail} />
         
         <Route path="/profileNgo" component={ProfileNgo} />
         <Route path="/profileUser" component={ProfileUser} />
         
         <Route path="/newIncidents" component={NewIncident} />
       </Switch>
    </BrowserRouter>
  );
}