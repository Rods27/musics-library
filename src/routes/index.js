import React from 'react';
import { Home, Musics, Favorites } from '../pages';
import { Switch, Route } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Musics } />
        
        {/* <Route exact path="/musics" component={ Musics } /> */}
        <Route exact path="/musics/favorites" component={ Favorites } />
      </Switch>
    );
  }
}

export default Routes
