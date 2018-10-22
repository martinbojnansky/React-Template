import { StoreState } from 'services/Store';
import { Action, ActionType } from 'actions/Actions';

export function dfault(state: StoreState, action: Action): StoreState {

    switch (action.type) {
      case ActionType.DEFAULT_LOAD_JOKE:
            return { ...state, joke: action.joke };
        default:
            return { ...state };
    }
}