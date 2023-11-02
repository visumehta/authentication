import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as authActions from "src/app/store/auth/auth.actions";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  
  myForm= new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });
  
  constructor(private store: Store, private snackbar: MatSnackBar) {
  }

  login(val: any) {
    if (val) {
      this.store.dispatch(authActions.login({ authUser: val }));
    }
  }
}
