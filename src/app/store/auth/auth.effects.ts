import { Injectable } from "@angular/core";
import * as authActions from "./auth.actions";
// import * as messageActions from '../message/message.actions';
import { HttpService } from "src/app/services/http.service";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap, tap } from "rxjs";
import { Router } from "@angular/router";
import { errorMessage, successMessage } from "../message/message.actions";
import { MatSnackBar } from "@angular/material/snack-bar";
import * as toasterActions from "../toaster/toaster.actions";
import { ToasterActions } from "../toaster/toaster.actions";

@Injectable()
export class authEffects {
  constructor(
    private _httpService: HttpService,
    private actions: Actions,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions.pipe(
      ofType(authActions.login),
      switchMap((action) =>
        this._httpService.login(action.authUser).pipe(
          tap(() => console.log("test")),
          map(() => authActions.loginSuccess()),
          catchError((error) => of(authActions.loginFailure({ error })))
        )
      )
    )
  );

  loginSuccesRedirct$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(authActions.loginSuccess),
        tap((action) => this.router.navigate(["/home"]))
      ),
    { dispatch: false }
  );

  loginFailureRedirect$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(authActions.loginFailure),
        tap((action) => this.router.navigate(["/login"]))
      ),
    { dispatch: false }
  );

  displaySuccessMessage = createEffect(() =>
    this.actions.pipe(
      ofType(authActions.loginSuccess),
      tap((action) => console.log(action)),
      map(() =>
        ToasterActions.success({
          message: "Login Success",
          
        })
      )
    )
  );
  displayErrorMessage$ = createEffect(() =>
    this.actions.pipe(
      ofType(authActions.loginFailure),
      tap((action) => console.log(action)),
      map(() =>
        ToasterActions.error({
          message: "Login Failed",
        })
      )
    )
  );
}
