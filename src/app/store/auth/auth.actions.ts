import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";

export const AuthActions = createActionGroup({
        source: 'Logout',
        events: {
        'Login': props<{username: string, password: string, isManually: boolean}>(),
        'Login Success': props<{isManually: boolean,username: string}>(),
        'Login Failure': props<{error: string}>(),
        'logout': props<{isLoggedIn: boolean}>(),
        'logout success': emptyProps(),
        'logout failure': props<{error: string}>(),
        'NoAction': emptyProps
    }
})