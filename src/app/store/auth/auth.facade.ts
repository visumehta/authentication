import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthActions } from './auth.actions';
import { selectUsername } from './auth.selectors';
import { UserLogin } from 'src/app/components/login/login.data';

@Injectable({providedIn: 'root'})
export class AuthFacade {
    store = inject(Store)    

    userName$ = this.store.select(selectUsername);

    userLogin(user: UserLogin, isManually : boolean){
        this.store.dispatch(AuthActions.login({username : user.username, password : user.password,isManually}))
    }
    userLogout(username: string, password: string, isManually: boolean){
        this.store.dispatch(AuthActions.login({username,password,isManually}))
    }
}