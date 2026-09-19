import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RollOfHonor } from './roll-of-honor/roll-of-honor';

@Component({
  imports: [RouterOutlet, RollOfHonor],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private router = inject(Router);
  protected readonly title = signal('MyJProject');
  LoginMakhdoom = signal<Makhdoom>({
    Name_of_the_person: 'مينا سمير (أنت)',
    family_and_class: '	أسرة القديس بولس الرسول',
    completed_competitions: 16,
    daily_series: 7,
    success_rate: 95,
    total_points: 480,
  });
  goToNexPage() {
    this.router.navigate(['race']);
  }
  goToPage() {
    this.router.navigate(['']);
  }
}
