import React from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom'
import SearchContainer from './container/SearchContainer'
import RouteContainer from './container/RouteContainer'
import HeaderLoggedInContainer from './container/HeaderLoggeInContainer'
import DashboardContainer from './container/DashBoardContainer'
import BottomBar from './components/BottomBar'
import HomeContainer from './container/HomeContainer'




class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user: 7
    }
  }

  render(){
    return (     
        <div className="App">
          <HeaderLoggedInContainer/>
          <Switch>
            <Route exact  path='/' render={(props)=><HomeContainer{...props}/>}/>
            <Route exact  path='/dashboard' render={(props)=><DashboardContainer {...props} user={this.state.user}/>}/>
            <Route exact  path='/route/:id' render={(props)=><RouteContainer {...props}/>}/>
            <Route exact  path='/addroute/' render={(props)=><SearchContainer {...props}/>}/>
          </Switch>
          <BottomBar/>
        </div>
      )
  }
}

const AppWithRouter = withRouter(App);
export default AppWithRouter;

