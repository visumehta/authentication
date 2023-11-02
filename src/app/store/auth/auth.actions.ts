import { createAction, props } from "@ngrx/store";
import { USER } from "src/app/interfaces/user";

export const login = createAction('[Auth] Login', props<{authUser: USER}>());
export const loginSuccess = createAction('[Auth] Login Success');
export const loginFailure = createAction('[Auth] Login Failure', props<{error: string}>());