import * as React from 'react';
import { StoreState } from 'states/StoreState';
import { Switch, Route } from 'react-router';
import { Routes } from 'constants/Routes';
import { AuthorizedRouteComponent } from 'components/AuthorizedRouteComponent';
import LayoutContainer from 'containers/LayoutContainer';

export interface AppComponentProps {
}

export interface AppComponentDispatch {
}

export class AppComponent extends React.Component<AppComponentProps & AppComponentDispatch, StoreState> {
  render() {
    return (
      <div className="app"> 
        <Switch>
          <Route path={Routes.LOGIN} />
          <AuthorizedRouteComponent path={Routes.DEFAULT} component={LayoutContainer} /> 
        </Switch>
      </div>
    );
  }
}