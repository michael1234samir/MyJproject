import { competition } from './../IData';
import { Component, inject, Input, OnInit, input, NgModule, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RollOfHonor } from './roll-of-honor/roll-of-honor';
import { CompLogin } from './comp-login/comp-login';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { JeServiceTs } from './je-service.ts';
import { Makhdoom } from '../IData';
import { Comps } from './comps/comps';

@Component({
  imports: [RouterOutlet, RollOfHonor, CompLogin, Comps],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private router = inject(Router);
  race = signal<boolean>(false);
  page = signal<boolean>(false);
  competition = signal<boolean>(false);
  main = signal<boolean>(false);
  comps = signal<boolean>(false);
  saintab = signal<boolean>(false);
  protected readonly title = signal('MyJProject');
  constructor(private myservice: JeServiceTs) {}
  goToRacePage() {
    this.router.navigate(['race']);
    this.saintab.set(false);
    this.main.set(false);
    this.page.set(false);
    this.race.set(true);
    this.comps.set(false);
    this.competition.set(false);
  }

  gotosaints() {
    this.comps.set(false);
    this.router.navigate(['saint']);
    this.main.set(false);
    this.page.set(false);
    this.race.set(false);
    this.saintab.set(true);
    this.competition.set(false);
  }

  compsfun() {
    this.router.navigate(['comps']);
    this.saintab.set(false);
    this.main.set(false);
    this.page.set(false);
    this.competition.set(false);
    this.race.set(false);
    this.comps.set(true);
  }
  goToMainPage() {
    this.comps.set(false);

    this.router.navigateByUrl('/main');
    console.log('true');
    this.main.set(true);
    this.page.set(false);
    this.race.set(false);
    this.competition.set(false);
  }
  goToCompetitionPage() {
    this.comps.set(false);

    this.router.navigate(['competition']);
    this.saintab.set(false);
    this.main.set(false);
    this.page.set(false);
    this.race.set(false);
    this.competition.set(true);
  }
  goToPage() {
    this.comps.set(false);

    this.router.navigate(['roll']);
    this.saintab.set(false);
    this.main.set(false);
    this.page.set(true);
    this.race.set(false);
    this.competition.set(false);
  }
  @Input() token?: Makhdoom | null;
  Tokens: Makhdoom | null = {};
  LoginMakhdoom: any;
  // token: any;
  login: boolean = false;
  ngOnInit() {
    this.myservice.isllogedIn$.subscribe((isloggedIn) => {
      this.login = isloggedIn;
      if (isloggedIn) {
        this.token = this.myservice.GetDecodedToken();
        this.Tokens = this.token;
      } else {
        this.token = null;
        this.Tokens = null;
      }
    });
    this.token = this.myservice.GetDecodedToken();
  }
  logout() {
    this.myservice.logout();
    this.router.navigateByUrl('/login');

    // this.login = false;
  }
  registered: boolean = false;
  onActivate(compref: any) {
    const token = this.myservice.GetDecodedToken();
    console.log(this.token);
    if (token) {
      compref.payload = token;
    }
  }
}
