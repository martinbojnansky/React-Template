import * as React from 'react';
import { StoreState } from 'services/Store';

export interface DefaultProps {
}

export interface DefaultDispatch {
}

export class Default extends React.Component<DefaultProps & DefaultDispatch, StoreState> {
    render() {
        return (
            <p>Default</p>
        );
    }
}