interface Makhdoom {
  Name_of_the_person: any;
  family_and_class: any;
  completed_competitions: number;
  daily_series: number;
  success_rate: number;
  total_points: number;
}
interface Racer {
  Name_of_the_person: any;
  family_and_class: any;
  points: number;
}
interface Question {
  QuestionBody: any;
  Choices: Choice;
  CorrectChoice: any;
  ref: any;
}
interface Choice {
  A: any;
  B: any;
  C: any;
  D: any;
}
