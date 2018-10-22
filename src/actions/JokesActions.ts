import { ActionCreator, Dispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from 'states/StoreState';
import { ActionType } from 'actions/Actions';

import httpClient from 'services/HttpClient';
import jokesApi from 'api/JokesApi';

export interface LoadJokeAction {
    type: ActionType.JOKES_LOAD_JOKE,
    joke: string
}

export const loadJoke: ActionCreator<ThunkAction<Promise<LoadJokeAction>, StoreState, void>> 
= () => {
    return async (dispatch: Dispatch<StoreState>, getState: () => StoreState, params): Promise<LoadJokeAction> => {
        let joke = "...";
        
        try {
            joke = await httpClient.parse<string>(jokesApi.getJoke());
        } catch(error) {
            console.log(error);
        }

        return {
            type: ActionType.JOKES_LOAD_JOKE,
            joke: joke
        } as LoadJokeAction;
    }
};
