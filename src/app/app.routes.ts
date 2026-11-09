import { Race } from './race/race';
import { Routes } from '@angular/router';
import { RollOfHonor } from './roll-of-honor/roll-of-honor';
import { Main } from './main/main';
import { Competitions } from './competitions/competitions';
import { CompLogin } from './comp-login/comp-login';
import { authGuard } from './auth-guard';
import { Comps } from './comps/comps';
import { PublicComps } from './public-comps/public-comps';
import { Saint } from './saint/saint';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: CompLogin },
  { path: 'roll', component: RollOfHonor, canActivate: [authGuard] },
  { path: 'race', component: Race, canActivate: [authGuard] },
  { path: 'main', component: Main, canActivate: [authGuard] },
  { path: 'competition', component: Competitions, canActivate: [authGuard] },
  { path: 'comps', component: Comps, canActivate: [authGuard] },
  { path: 'publicomps', component: PublicComps, canActivate: [authGuard] },
  { path: 'saint', component: Saint, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' },
];
