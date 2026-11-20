import { Component, OnInit, signal } from '@angular/core';
import { saint } from '../../IData';
import { JeServiceTs } from '../je-service.ts';

@Component({
  imports: [],
  selector: 'app-saint',
  styleUrl: './saint.css',
  templateUrl: './saint.html',
})
export class Saint implements OnInit {
  saint = signal<saint>({});
  constructor(private myservice: JeServiceTs) {}
  ngOnInit(): void {
    this.myservice.getsainttoday().subscribe({
      next: (response: any) => {
        this.saint.set(response);
        console.log(this.saint());
      },
    });
  }
  boolean = signal<boolean[]>([false]);
  click(index: number) {
    this.boolean = signal<boolean[]>([false]);
    this.boolean()[index] = true;
  }
  submit() {
    // this.myservice.submit();
  }
}
