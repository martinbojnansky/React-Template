import * as dfault from './Default';

export enum ActionType {
    NOT_SPECIFIED = 'NOT_SPECIFIED',
    // register action types here
    DEFAULT_LOAD_JOKE = 'DEFAULT_LOAD_JOKE'
}

export type Action = NotSpecifiedAction
// register action interfaces here
| dfault.LoadJokeAction
;

export interface NotSpecifiedAction {
    type: ActionType.NOT_SPECIFIED
}
