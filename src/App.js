import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import HomePageContainer from './containers/HomePageContainer'
import ProfilePageContainer from './containers/ProfilePageContainer'
import TimelineContainer from './containers/TimelineContainer'

class App extends Component {
  render() {
    return (
      <div>
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/user/:id" component={ProfilePageContainer} />
				<Route exact path="/timeline" component={TimelineContainer} />
      </Switch>
      </div>
    );
  }
}

export default App;
