import { competition, UserComp } from './../../IData';
import { jwtDecode } from 'jwt-decode';
import { Component, inject, signal } from '@angular/core';
import { Makhdoom } from '../../IData';
import { JeServiceTs } from '../je-service.ts';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-main',
  styleUrl: './main.css',
  templateUrl: './main.html',
})
export class Main {
  payload2 = signal<Makhdoom | null>(null);
  competition = signal<competition>({});
  competitions = signal<UserComp[]>([]);
  private router = inject(Router);
  /**
   *
   */
  constructor(private myservice: JeServiceTs) {}
  token() {
    console.log(this.payload2);
  }
  ngOnInit(): void {
    this.myservice.getuser().subscribe((e: any) => {
      this.payload2.set(e);
      console.log(this.payload2());
    });
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
  race() {
    this.router.navigate(['race']);
  }
}
