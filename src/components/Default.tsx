import * as React from 'react';
import { StoreState } from 'services/Store';

import * as defaultActions from 'actions/Default';

export interface DefaultProps {
    text: string
}

export interface DefaultDispatch {
    loadText: () => Promise<defaultActions.LoadJokeAction>
}

export class Default extends React.Component<DefaultProps & DefaultDispatch, StoreState> {
    render() {
        return (
            <div>
                <button type="button" 
                    className="btn btn-primary m-2 mb-0"
                    onClick={this.props.loadText}>
                    Load Joke
                </button>
                <p className="m-2">
                    {this.props.text}
                </p>
            </div>
        );
    }
}