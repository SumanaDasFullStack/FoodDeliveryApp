import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {

  // Injecting Angular services using the 'inject' function
  const router = inject(Router);
  const userService = inject(LoginService);
  const toastrService = inject(ToastrService);

  // Checking if the current user is logged in and has admin privileges
  if(userService.currentUser && userService.currentUser.isAdmin) {
    // If admin, allow access to the route
    return true;
  }

  // If not admin, show an error message and navigate to the dashboard
  toastrService.error('Access Denied');
  router.navigate(['/login']);

  // Return false to deny access to the route
  return false;
};
