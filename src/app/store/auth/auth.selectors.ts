import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const selectFeature = createFeatureSelector<AuthState>("auth");

export const isLoggedIn = createSelector(
    selectFeature,
    (state: AuthState) => state.isLoggedIn
)

export const selectUsername = createSelector(
    selectFeature,
    (state: AuthState) => state.username
)

