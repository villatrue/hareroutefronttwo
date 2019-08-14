import React from 'react';
// import logo from './logo.svg';
import './App.css';

import {Route, Switch, withRouter} from 'react-router-dom'
import SearchContainer from './container/SearchContainer'
import RouteContainer from './container/RouteContainer'

import DashboardContainer from './container/DashBoardContainer'



class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user: 5
    }
  }

  render(){
    return (     
        <div className="App">
          <Switch>
            <Route exact  path='/dashboard' render={()=><DashboardContainer user={this.state.user}/>}/>
            <Route exact  path='/route/:id' render={(props)=><RouteContainer {...props}/>}/>
            <Route exact  path='/addroute/' render={()=><SearchContainer/>}/>
          </Switch>
        </div>
      )
  }
}

const AppWithRouter = withRouter(App);
export default AppWithRouter;

