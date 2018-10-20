import * as React from 'react';
import { StoreState } from 'services/Store';
import { Switch, Route } from 'react-router';
import { Routes } from 'constants/Routes';
import { AuthorizedRoute } from 'components/AuthorizedRoute/AuthorizedRoute';
import Layout from 'containers/Layout';

export interface AppProps {
}

export interface AppDispatch {
}

export class App extends React.Component<AppProps & AppDispatch, StoreState> {
  render() {
    return (
      <div className="app">
        <main> 
          <Switch>
            <Route path={Routes.LOGIN} />
            <AuthorizedRoute path={Routes.DEFAULT} component={Layout} /> 
          </Switch>     
        </main>
      </div>
    );
  }
}