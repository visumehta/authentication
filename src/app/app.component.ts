import { Component, OnInit, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./store/app.state";
import * as authActions from "./store/auth/auth.actions";
import { AuthFacade } from "./store/auth/auth.facade";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  standalone : true,
  imports:[
    CommonModule,
    HeaderComponent,
    RouterModule
  ],
  templateUrl: "./app.component.html", 
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "authentication";
  authFacade = inject(AuthFacade)

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    const getItem = localStorage.getItem("user");
    if (getItem) {
      const getUser = JSON.parse(getItem);
      this.authFacade.userLogin(getUser[0].username, getUser[0].password)

      // this.store.dispatch(
      //   authActions.login({
      //     username: getUser[0].username,
      //     password: getUser[0].password,
      //     isManually: false
      //   })
      // );
    }
  }
}
