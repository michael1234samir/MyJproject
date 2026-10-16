import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Register, userlogin } from './../../IData';
import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  inject,
  model,
  Output,
  output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JeServiceTs } from '../je-service.ts';
import { Makhdoom } from '../../IData.js';

@Component({
  imports: [FormsModule, RouterOutlet],
  selector: 'app-comp-login',
  styleUrl: './comp-login.css',
  templateUrl: './comp-login.html',
})
export class CompLogin {
  private router = inject(Router);
  constructor(private myservice: JeServiceTs) {}
  boolean: boolean = false;
  stages = [{ key: 'اعدادى' }, { key: 'ثانوى' }, { key: 'حامعه' }, { key: 'اخر' }];
  families = [{ key: 'اجتماع الثلاثة فتيه القديسين' }];
  roles = [{ key: 'user' }, { key: 'admin' }];
  booleanStage: boolean = false;
  booleanstage: boolean = false;
  booleanrole: boolean = false;
  stage: any;
  Stage: any;
  role: any;
  // @Output() registered = new EventEmitter<boolean>();
  boolean1: boolean = true;
  boolean2: boolean = false;
  user: Register = {};
  userlogin: userlogin = {
    phoneNumber: null,
    password: null,
  };
  selectstage(stage: any) {
    this.Stage = stage;
    this.user.stage = stage;
  }
  selectStage(stage: any) {
    this.stage = stage;
    this.user.Family_Name = stage;
  }
  selectrole(role: any) {
    this.role = role;
    this.user.role = role;
    console.log(role);
  }
  toggleMenu() {
    this.booleanStage = !this.booleanStage;
  }
  toggleMenu2() {
    this.booleanstage = !this.booleanstage;
  }
  toggleMenu3() {
    this.booleanrole = !this.booleanrole;
  }

  bgcolor1: string = 'linear-gradient(135deg, rgba(198, 125, 10, 0.4) , rgba(180, 83, 9, 0.55))';
  color1: string = '#fed44e';
  bgcolor2: string = '#040a1a';
  color2: string = '#8a99ae';

  border_color1: string = '   #9a6200';
  border_color2: string = '   transparent';
  register() {
    this.boolean2 = !this.boolean2;
    this.boolean1 = !this.boolean1;
    this.bgcolor2 =
      'linear-gradient(135deg, rgba(217, 119, 6, 0.5) 0%, rgba(180, 83, 9, 0.4) 100%)';
    this.color2 = '#fed44e';
    this.bgcolor1 = '#040a1a';
    this.color1 = '#94a3b8';
    this.border_color1 = 'transparent';
    this.border_color2 = '#9a6200';
  }
  login() {
    this.boolean1 = !this.boolean1;
    this.boolean2 = !this.boolean2;
    this.bgcolor1 = 'linear-gradient(135deg,rgba(217, 119, 6, 0.5) 0%, rgba(180, 83, 9, 0.4) 100%)';
    this.color1 = '#fed44e';
    this.bgcolor2 = '#040a1a';
    this.color2 = '#94a3b8';
    this.border_color1 = '#9a6200';
    this.border_color2 = 'transparent';
  }
  logins() {
    if (this.userlogin.phoneNumber && this.userlogin.password) {
      this.myservice.login(this.userlogin).subscribe({
        next: (response) => {
          if (response && response.token) {
            // localStorage.removeItem('token');
            localStorage.setItem('token', response.token);
            this.myservice.notifyloginSuccess();
          }
        },
        error: (error) => {
          console.log('حدث خطأ اثناء تسجيل الدخول', error);
        },
      });
    }
  }
  submit() {
    if (
      this.user.phoneNumber &&
      this.user.password &&
      this.user.Family_Name &&
      this.user.role &&
      this.user.stage &&
      this.user.father_Confessor &&
      this.user.Full_Name &&
      this.user.address
    ) {
      console.log(this.user);
      this.myservice.register(this.user).subscribe({
        next: (response) => {
          if (response && response.token) {
            const boolean = true;
            // localStorage.removeItem('token');
            localStorage.setItem('token', response.token);

            this.myservice.notifyloginSuccess();
            this.router.navigate(['main']);
          }
        },
        error: (err) => {
          console.log(this.user);
          console.error('حدث خطا اثناء انشاء الحساب', err.error?.errors);
          console.error(err.error);
        },
      });
    }
  }
}
