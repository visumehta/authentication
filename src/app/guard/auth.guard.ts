import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { isLoggedIn } from '../store/auth/auth.selectors';
import { map } from 'rxjs';
import { AuthState } from '../store/auth/auth.state';

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<AuthState>);
  const router = inject(Router);
  return store.pipe(
    select(isLoggedIn),
    map((loggedIn) => {
      if (!loggedIn) {
        router.navigate(['/login']);
        return false;
      }
      return true
    })
  )
};
