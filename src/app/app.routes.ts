import { Race } from './race/race';
import { Routes } from '@angular/router';
import { RollOfHonor } from './roll-of-honor/roll-of-honor';

export const routes: Routes = [
  { path: '', component: RollOfHonor },
  { path: 'race', component: Race },
];
