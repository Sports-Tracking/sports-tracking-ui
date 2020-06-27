import React from 'react';

import { Switch, Route, useParams } from "react-router-dom";
import LandingPage from './components/LandingPage'
const App = () => {
  return (<Switch>
    <Route exact path="/"><LandingPage /></Route>
    <Route exact path="/soccer/:id"><SoccerLeague /></Route>
  </Switch>)
}

const SoccerLeague = () => {
  let { id } = useParams();
  return <div>{id}</div>
}


export default App;
