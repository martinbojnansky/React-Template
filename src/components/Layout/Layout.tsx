import * as React from 'react';
import { Switch, Redirect, Route } from 'react-router';
import { Routes } from 'constants/Routes';
import { Default } from 'components/Default/Default';
import { StoreState } from 'services/Store';

import './Layout.css';

export interface LayoutProps {
}

export interface LayoutDispatch {
}

export class Layout extends React.Component<LayoutProps & LayoutDispatch, StoreState> {
    render() {
        return (
            <div className="layout">
                <nav className="navbar navbar-expand-lg bg-dark text-white">               
                    <a className="navbar-brand">React Boilerplate</a>
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item">
                        </li>                    
                    </ul>
                </nav>
                <div>
                    <Switch>
                        <Redirect exact={true} path={Routes.DEFAULT} to={Routes.TODOS} />
                        <Route path={Routes.TODOS} component={Default} /> 
                    </Switch>   
                </div>
            </div>
        );
    }
}