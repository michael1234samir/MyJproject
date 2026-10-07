import { Component, ElementRef } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-comp-login',
  styleUrl: './comp-login.css',
  templateUrl: './comp-login.html',
})
export class CompLogin {
  boolean: boolean = false;
  stages = [{ key: 'اعدادى' }, { key: 'ثانوى' }, { key: 'حامعه' }, { key: 'اخر' }];
  Stages = [
    { key: 'الصف الاول', value: 1 },
    { key: 'الصف الثانى', value: 2 },
    { key: 'الصف الثالث', value: 3 },
  ];
  roles = [{ key: 'user' }, { key: 'admin' }];
  booleanStage: boolean = false;
  booleanstage: boolean = false;
  booleanrole: boolean = false;
  stage: any;
  Stage: any;
  role: any;
  boolean1: boolean = true;
  boolean2: boolean = false;

  selectstage(stage: any) {
    this.stage = stage;
  }
  selectStage(stage: any) {
    this.Stage = stage;
  }
  selectrole(role: any) {
    this.role = role;
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
  bgcolor1: any;
  color1: any;
  bgcolor2: any;
  color2: any;
  register() {
    this.boolean1 = !this.boolean1;
    this.boolean2 = !this.boolean2;
    bgcolor1: '#442b14';
    color1: '#fed44e';
    bgcolor2: '#040a1a';
    color2: '#8a99ae';
  }
  login() {
    this.boolean2 = !this.boolean2;
    this.boolean1 = !this.boolean1;
    bgcolor2: '#442b14';
    color2: '#fed44e';
    bgcolor1: '#040a1a';
    color1: '#8a99ae';
  }
}
