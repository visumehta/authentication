import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap, map } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ToasterActions } from "./toaster.actions";

@Injectable()

export class ToasterEffects {
    constructor(private action$: Actions, private _snackbar: MatSnackBar) {}

    toasterMessage$ = createEffect(() => 
        this.action$.pipe (
            ofType(ToasterActions.success),
            tap((action) => this._snackbar.open(action.message, '', {duration: 3000}))
        ), {dispatch: false}
    )

    errortoasterMessage$ = createEffect(() => 
        this.action$.pipe (
            ofType(ToasterActions.error),
            tap((action) => this._snackbar.open(action.message, '', {duration: 3000}))
        ), {dispatch: false}
    )
}