import { Makhdoom } from './../../IData';
import { Component, NgModule, OnInit, signal } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { JeServiceTs } from '../je-service.ts';

@Component({
  imports: [CommonModule],
  selector: 'app-roll-of-honor',
  styleUrl: './roll-of-honor.css',
  templateUrl: './roll-of-honor.html',
})
export class RollOfHonor implements OnInit {
  /**
   *
   */
  Makhdoom: Makhdoom[] = [];
  CentresMakhdoom: Makhdoom[] = [];
  constructor(private myservice: JeServiceTs) {}
  ngOnInit(): void {
    this.myservice.getallusers().subscribe({
      next: (e: Makhdoom[]) => {
        this.Makhdoom = e;
        console.log(e);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.myservice.getorder().subscribe({
      next: (e: Makhdoom[]) => {
        this.CentresMakhdoom = [e[0], e[1], e[2]];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
