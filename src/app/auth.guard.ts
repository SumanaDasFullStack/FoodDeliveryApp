import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userService = inject(LoginService);

  if(userService.currentUser.emailid) {
    return true;
  }

  router.navigate(['/login'], { queryParams: { returnUrl: state.url} });

  return false;
};
