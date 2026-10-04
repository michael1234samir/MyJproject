import { Race } from './race/race';
import { Routes } from '@angular/router';
import { RollOfHonor } from './roll-of-honor/roll-of-honor';
import { Main } from './main/main';
import { Competitions } from './competitions/competitions';

export const routes: Routes = [
  { path: '', component: RollOfHonor },
  { path: 'race', component: Race },
  { path: 'Main', component: Main },
  { path: 'Competition', component: Competitions },
];
