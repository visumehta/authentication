import { Component, OnInit, inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { USER } from "src/app/interfaces/user";
import * as authActions from "src/app/store/auth/auth.actions";
import { AuthFacade } from "src/app/store/auth/auth.facade";
import { UserLogin } from "./login.data";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {

  userFacade = inject(AuthFacade)
  
  myForm= new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });
  
  constructor(private store: Store, private snackbar: MatSnackBar) {
  }

  login(val: any) {
    if (val) {
      this.userFacade.userLogin(val as UserLogin,true)
    }
  }
}
