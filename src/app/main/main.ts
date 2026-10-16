import { jwtDecode, JwtPayload } from 'jwt-decode';
import { Component } from '@angular/core';
import { Makhdoom } from '../../IData';

@Component({
  imports: [],
  selector: 'app-main',
  styleUrl: './main.css',
  templateUrl: './main.html',
})
export class Main {
  payload: Makhdoom = {};
  token() {
    console.log(this.payload);
  }
}
