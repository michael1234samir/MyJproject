import { competition, UserComp } from './../../IData';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { Component, signal } from '@angular/core';
import { Makhdoom } from '../../IData';
import { JeServiceTs } from '../je-service.ts';

@Component({
  imports: [],
  selector: 'app-main',
  styleUrl: './main.css',
  templateUrl: './main.html',
})
export class Main {
  payload: Makhdoom = {};
  competition = signal<competition>({});
  competitions = signal<UserComp[]>([]);
  /**
   *
   */
  constructor(private myservice: JeServiceTs) {}
  token() {
    console.log(this.payload);
  }
  ngOnInit(): void {
    this.myservice.GetMyCompletedCompetitions().subscribe({
      next: (response) => {
        this.competitions.set(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.myservice.GetCompetitionToday().subscribe({
      next: (response) => {
        this.competition.set(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
