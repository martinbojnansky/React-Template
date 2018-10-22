import * as React from 'react';
import { StoreState } from 'states/StoreState';

import * as jokesActions from 'actions/JokesActions';

export interface JokesComponentProps {
    joke: string
}

export interface JokesComponentDispatch {
    loadJoke: () => Promise<jokesActions.LoadJokeAction>
}

export class JokesComponent extends React.Component<JokesComponentProps & JokesComponentDispatch, StoreState> {
    render() {
        return (
            <div>
                <button 
                    type="button" 
                    className="btn btn-primary m-2 mb-0"
                    onClick={this.props.loadJoke}>
                    Load Joke
                </button>
                <p 
                    className="m-2">
                    {this.props.joke}
                </p>
            </div>
        );
    }
}