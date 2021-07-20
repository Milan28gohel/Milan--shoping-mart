import './App.css';
import RootContainer from './container/RootContainer';
import {Switch,Route,BrowserRouter} from "react-router-dom";
import * as routes from "./lib/constants";
import React from 'react';


const  App=()=> {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route path={routes.ROOT_ROUTE} component={RootContainer}/>
         </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
