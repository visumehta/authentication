import { Injectable } from "@angular/core";
// import * as authActions from "./auth.actions";
import { HttpService } from "src/app/services/http.service";
import { createEffect, Actions, ofType, concatLatestFrom } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap, withLatestFrom } from "rxjs";
import { Router } from "@angular/router";
import { ToasterActions } from "../toaster/toaster.actions";
import { Store, select } from "@ngrx/store";
import { selectFeature, selectUsername } from "./auth.selectors";
import { AuthActions } from "./auth.actions";

@Injectable()
export class authEffects {
  constructor(
    private _httpService: HttpService,
    private actions: Actions,
    private router: Router,
    private store: Store
  ) {}

  login$ = createEffect(() =>
    this.actions.pipe(
      ofType(AuthActions.login),
      switchMap((action) =>
        this._httpService.login(action.username, action.password).pipe(
          tap(() => localStorage.setItem("isLoggedIn", "true")),
          map(() =>
            AuthActions.loginSuccess({ isManually: action.isManually,username: action.username})
          ),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );

  loginSuccesRedirct$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(AuthActions.loginSuccess),
        // tap(() => this.router.navigate(["/home"]))
      ),
    { dispatch: false }
  );

  loginFailureRedirect$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(AuthActions.loginFailure),
        tap((action) => this.router.navigate(["/login"]))
      ),
    { dispatch: false }
  );

  displaySuccessMessage = createEffect(() =>
    this.actions.pipe(
      ofType(AuthActions.loginSuccess),
      withLatestFrom(this.store.select(selectUsername)),
      map(([action, firstName]) => {
        if (action.isManually) {
          
          return ToasterActions.success({
            message: `Login Success ${firstName}`,
          });
        }
        return AuthActions.noAction();
      })
    )
  );
  displayErrorMessage$ = createEffect(() =>
    this.actions.pipe(
      ofType(AuthActions.loginFailure),
      map(() =>
        ToasterActions.error({
          message: "Login Failed",
        })
      )
    )
  );
  logoutSuccess$ = createEffect;
}
