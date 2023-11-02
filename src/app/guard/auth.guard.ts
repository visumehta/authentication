import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { authState } from '../store/auth/auth.reducer';
import { isLoggedIn } from '../store/auth/auth.selectors';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<authState>);
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
