import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../containers/Home'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Loader from  '../components/Loader/';
import Login from '../views/Pages/Common/Login';
import routes from '../constants/Routes';
   
class RoutesConfiguration extends Component {
 render() {
     return (
      <div>
       <Loader/>
        <MuiThemeProvider>
            <HashRouter>
               <Switch>
                <Route exact path={routes.LOGIN.path} name={routes.LOGIN.name} component={Login}/>
                <Route  path={routes.HOME.path} name={routes.HOME.name} component={Home}/> 
              </Switch>
           </HashRouter>
       </MuiThemeProvider>
      </div>
    );
  }
}

export default  RoutesConfiguration;