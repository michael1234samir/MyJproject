import { competition, Makhdoom, AnswerDto, CompQuestion, UserComp } from './../../IData';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  signal,
  ViewChild,
  viewChild,
} from '@angular/core';
import { Choice, Question } from '../../IData';
import { JeServiceTs } from '../je-service.ts';
import { Competitions } from '../competitions/competitions';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-race',
  styleUrl: './race.css',
  templateUrl: './race.html',
})
export class Race implements OnInit, AfterViewInit {
  payload: Makhdoom = {};
  competition = signal<competition | null>(null);
  /**
   *
   */
  questions = signal<CompQuestion[]>([]);
  bool = signal(false);
  bool2 = signal(false);
  bool3 = signal(true);
  constructor(private myservice: JeServiceTs) {}
  @ViewChild('seconds') seconds!: ElementRef<HTMLSpanElement>;
  @ViewChild('seconds2') seconds2!: ElementRef<HTMLSpanElement>;
  @ViewChild('minutes') minutes!: ElementRef<HTMLSpanElement>;
  @ViewChild('minutes2') minutes2!: ElementRef<HTMLSpanElement>;
  ngAfterViewInit(): void {
    var sec = Number(this.seconds.nativeElement.textContent);
    var min = Number(this.minutes.nativeElement.textContent);

    setInterval(() => {
      if (sec > 0) {
        sec--;
        this.seconds.nativeElement.textContent = sec.toString().padStart(2, '0');
      } else if (sec == 0 && min == 0) {
        this.bool.set(true);
      } else if (sec == 0) {
        min--;
        sec = 59;
      }
      this.minutes.nativeElement.textContent = min.toString().padStart(2, '0');
    }, 1000);
    var sec2 = Number(this.seconds2.nativeElement.textContent);
    var min2 = Number(this.minutes2.nativeElement.textContent);

    setInterval(() => {
      if (sec2 > 0) {
        sec2--;
        this.seconds2.nativeElement.textContent = sec2.toString().padStart(2, '0');
      } else if (sec2 == 0 && min2 == 0) {
        this.bool2.set(false);
      } else if (sec2 == 0) {
        min2--;
        sec2 = 59;
      }
      this.minutes2.nativeElement.textContent = min2.toString().padStart(2, '0');
    }, 1000);
  }
  bgchoice = '';
  selectedChoices: { [questionindex: number]: number } = {};
  selectedchoice(questionidex: number, index: number) {
    this.bgchoice = '#05061b';
    this.selectedChoices[questionidex] = index;
    console.log(questionidex);
    console.log(index);
  }

  ngOnInit(): void {
    this.myservice.GetCompetitionToday().subscribe({
      next: (response) => {
        this.competition.set(response);
        this.questions.set(response?.questions ?? []);
        console.log(this.competition);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  result = signal<UserComp>({});
  score: number = 0;
  answers: AnswerDto[] = [];
  submit() {
    console.log(this.selectedChoices);
    this.answers = Object.entries(this.selectedChoices).map(([questionindex, answerindex]) => ({
      Question_Index: Number(questionindex),
      answer: answerindex,
    }));
    this.myservice.submit(this.competition()?.competition_id! as number, this.answers).subscribe({
      next: (response) => {
        this.bool3.set(false);
        this.result.set(response);
        this.score = this.result().score ?? 0 + 1;
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  // Racers = signal<Question[]>([
  //   {
  //     QuestionBody: '«إِذَا أَرَاغَكَ الْخُطَاةُ فَمَاذَا تَفْعَلُ حَسَبَ نَصِيحَةِ الْحَكِيمِ؟»',
  //     Choices: {
  //       A: 'أ) تَمْشِي مَعَهُمْ لِتُرْشِدَهُمْ',
  //       B: 'ب) فَلاَ تَرْضَ وَامْنَعْ رِجْلَكَ عَنْ مَسَالِكِهِمْ',
  //       C: 'ج) تُجَادِلُهُمْ طَوِيلاً',
  //       D: 'د) تَسْكُتُ فَقَطْ',
  //     },
  //     CorrectChoice: 'B',
  //     ref: '«يَا ابْنِي، إِنْ أَرَاغَكَ الْخُطَاةُ فَلاَ تَرْضَ... اِمْنَعْ رِجْلَكَ عَنْ مَسَالِكِهِمْ» (أم 1: 10، 15)',
  //   },
  //   {
  //     QuestionBody:
  //       '«الْحِكْمَةُ تُنَادِي فِي الْخَارِجِ...» أَيْنَ تَرْفَعُ صَوْتَهَا كَمَا جَاءَ بِالنَّصِّ؟»',
  //     Choices: {
  //       A: 'أ) فِي الْقُصُورِ فَقَطْ',
  //       B: 'ب) فِي الأَسْوَاقِ وَعِنْدَ مَدَاخِلِ الأَبْوَابِ',
  //       C: 'ج) فِي الْبَرَارِي وَالْقِفَارِ',
  //       D: 'د) بَيْنَ الْعُلَمَاءِ سِرّاً',
  //     },
  //     CorrectChoice: 'B',
  //     ref: '«الْحِكْمَةُ تُنَادِي فِي الْخَارِجِ. فِي الشَّوَارِعِ تُعْطِي صَوْتَهَا. تَدْعُو فِي رُؤُوسِ الأَسْوَاقِ، فِي مَدَاخِلِ الأَبْوَابِ» (أم 1: 20-21',
  //   },
  // ]);
  click() {
    console.log(this.competition);
  }
  objectEntries(obj: Choice) {
    return Object.entries(obj).map(([key, value]) => ({ key, value }));
  }
}
