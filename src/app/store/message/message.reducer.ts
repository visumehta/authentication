import { createReducer, on, Action } from "@ngrx/store";
import * as messageActions from "./message.actions";

export interface Message {
    successMessage: string | null;
    errorMessage: string | null;
}

const initialState: Message = {
    successMessage: null,
    errorMessage: null
}

const _messageReducer = createReducer(
    initialState,
    on (messageActions.successMessage, (state, {successMessage}) => ({
        ...state, successMessage: successMessage
    })),
    on (messageActions.errorMessage, (state, {error}) => ({
        ...state, errorMessage: error
    }))
)

export function messageReducer(state: Message, action: Action) {
    console.log('state', state);
    console.log('action', action);
    
    
    return _messageReducer(state, action)
}