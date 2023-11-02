import { createAction, props } from "@ngrx/store";

export const successMessage = createAction('[Message] Message Success', props<{successMessage: string}>());
export const errorMessage = createAction('[Message] Failure Message', props<{error: string}>());

export const showDynamicSnackbar = createAction('[Dynamic snackbar] Show Dynamic Snackbar', props<{
    message: string;
    actionText?: string;
    duration?: number;
    // panelClass: ['blue-snackbar']
}>())