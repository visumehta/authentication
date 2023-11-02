import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authState } from "./auth.reducer";

export const selectFeature = createFeatureSelector<authState>("authUser");

export const selectFailure = createSelector(
  selectFeature,
  (state: authState) => state.error
);

export const isLoggedIn = createSelector(
    selectFeature,
    (state: authState) => state.isLoggedIn
)
