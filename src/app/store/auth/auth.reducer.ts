import { createReducer, on, Action } from "@ngrx/store";
import { USER } from "src/app/interfaces/user";
import * as authActions from "./auth.actions";

export interface authState {
    formData: USER[] | null;
    isLoggedIn: boolean;
    error: string | null;
}

const initialState: authState = {
    formData: [],
    isLoggedIn:false,
    error: null
}

const _authReducer = createReducer<authState>(
    initialState,
    on (authActions.loginSuccess, (state) => ({
        ...state, isLoggedIn: true, error: null
    })),
    on (authActions.loginFailure, (state, {error}) => ({
        ...state, isLoggedIn: false, error:error
    }))
)

export function authReducer(state: authState | undefined, action: Action) {
    return _authReducer(state, action)
}