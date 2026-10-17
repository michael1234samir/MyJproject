import { inject } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { JeServiceTs } from './je-service.ts';
import { routes } from './app.routes.js';

export const authGuard: CanActivateFn = () => {
  const service = inject(JeServiceTs);
  const route = inject(Router);
  if (!service.isTokenExpired()) {
    return true;
  }
  return route.createUrlTree(['/login']);
};
