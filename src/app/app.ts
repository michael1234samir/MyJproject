import { Component, inject, Input, OnInit, input, NgModule, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RollOfHonor } from './roll-of-honor/roll-of-honor';
import { CompLogin } from './comp-login/comp-login';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { JeServiceTs } from './je-service.ts';
import { Makhdoom } from '../IData';

@Component({
  imports: [RouterOutlet, RollOfHonor, CompLogin],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private router = inject(Router);
  protected readonly title = signal('MyJProject');
  constructor(private myservice: JeServiceTs) {}
  goToRacePage() {
    this.router.navigate(['race']);
  }
  goToMainPage() {
    this.router.navigateByUrl('/main');
    console.log('true');
  }
  goToCompetitionPage() {
    this.router.navigate(['competition']);
  }
  goToPage() {
    this.router.navigate(['roll']);
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
