import { Race } from './race/race';
import { Routes } from '@angular/router';
import { RollOfHonor } from './roll-of-honor/roll-of-honor';
import { Main } from './main/main';
import { Competitions } from './competitions/competitions';
import { CompLogin } from './comp-login/comp-login';

export const routes: Routes = [
  { path: '', component: CompLogin },
  { path: 'roll', component: RollOfHonor },
  { path: 'race', component: Race },
  { path: 'main', component: Main },
  { path: 'competition', component: Competitions },
];
