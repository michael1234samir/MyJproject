interface Makhdoom {
  Name_of_the_person: any;
  family_and_class: any;
  stage?: any;
  Phone_Number?: any;
  last_shared?: any;
  completed_competitions?: number;
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
interface Book {
  book_id: any;
  book: any;
  book_en: any;
  total_chapters: any;
  chapters: any;
}
interface Choice {
  A: any;
  B: any;
  C: any;
  D: any;
}