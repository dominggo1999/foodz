import React from 'react';
import './styles/main.scss';
import { Route, Switch } from 'react-router-dom';
import Showcase from './pages/Showcase';

const App = () => {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/showcase"
          component={Showcase}
        />
      </Switch>
    </>
  );
};

export default App;
