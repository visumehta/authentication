import { createReducer, on, Action } from "@ngrx/store";
// import * as authActions from "./auth.actions";
import { AuthState } from "./auth.state";
import { AuthActions } from "./auth.actions";
// import { Logout } from './auth.actions';

const initialState: AuthState = {
    username: null,
    password: null,
    isLoggedIn:false,
    error: null
}

const _authReducer = createReducer<AuthState>(
    initialState,
    on (AuthActions.loginSuccess, (state, {username}) => ({
        ...state, isLoggedIn: true, error: null, username
    })),
    on (AuthActions.loginFailure, (state, {error}) => ({
        ...state, isLoggedIn: false, error:error
    })),
    on(AuthActions.logoutSuccess, (state) => ({
        ...state
    })),
    on(AuthActions.logoutFailure, (state, {error}) => ({
        ...state, error: error
    }))
)

export function authReducer(state: AuthState | undefined, action: Action) {        
    return _authReducer(state, action)
}