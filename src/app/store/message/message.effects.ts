import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import * as messageActions from "./message.actions";
import { tap, delay, mergeMap } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class MessageEffects {
    constructor(private actions$: Actions, private _snackbar: MatSnackBar) {}

    displaySnackbar$ = createEffect(() => 
        this.actions$.pipe(
            ofType(messageActions.showDynamicSnackbar),
            tap(({message, actionText, duration}) => {
                this._snackbar.open(message, actionText || 'Close', {duration: duration || 3000})
            })
        ), {dispatch: false}    
    )

    successToast$ = createEffect(() => 
        this.actions$.pipe(
            ofType(messageActions.successMessage),
            tap((message) => this._snackbar.open('Login Success', 'Close', {duration: 3000})),
            tap((message) => console.log(message)),
            mergeMap(({successMessage}) => [messageActions.successMessage({successMessage})])
        ), {dispatch: false}
    )

    errorToast$ = createEffect(() => 
        this.actions$.pipe(
            ofType(messageActions.errorMessage),
            tap(() => this._snackbar.open('Login Failed','Close', {duration: 3000})),
            mergeMap(({error}) => [messageActions.errorMessage({error})])
        ), {dispatch: false}
    )
}