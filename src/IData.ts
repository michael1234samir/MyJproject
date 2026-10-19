import { JwtPayload } from 'jwt-decode';

export interface Makhdoom {
  password?: string;
  Family?: string;
  phoneNumber?: string;
  father_Confessor?: string;
  Name?: string;
  address?: string;
  stage?: any;
  role?: any;
  last_shared?: any;
  completed_competitions?: number;
  daily_series?: number;
  success_rate?: number;
  total_points?: number;
  BirthDate?: Date;
}
export interface MakhdoomResponse {
  address: string;
  birthDate?: string;
  completed_competitions?: number;
  daily_series: number;
  family_Name: string;
  father_Confessor: string;
  full_Name: string;
  lastCompetitionDate?: Date;
  phoneNumber: string;
  stage: string;
  success_rate: number;
  total_points: number;
  userCompetitions?: object[];
  user_id: number;
}

export interface Register {
  password?: string;
  Family_Name?: string;
  phoneNumber?: string;
  father_Confessor?: string;
  Full_Name?: string;
  address?: string;
  BirthDate?: Date;
  stage?: any;
  role?: any;
  last_shared?: any;
  completed_competitions?: number;
  daily_series?: number;
  success_rate?: number;
  total_points?: number;
}
export interface competition {
  competition_id?: Number;
  competition_title?: string;
  family?: string;
  bonus?: number;
  finished__At?: Date;
  Opened__At?: Date;

  Created_At?: Date;
  questions?: CompQuestion[];
}
export interface UserComp {
  competition_id?: number;
  Family?: string;
  CompletedAt?: Date;
  score?: number;
  User?: MakhdoomResponse[];
  Competition?: competition[];
  competition_title?: string;
}
export interface CompQuestion {
  competition_Question: string;
  choiceA: string;
  choiceB: string;
  choiceC: string;
  choiceD: string;
  correct_option_index: number;
}
export interface userlogin {
  phoneNumber: any;
  password: any;
}
export interface Racer {
  Name?: any;
  Family?: any;
  total_points: number;
}
export interface Question {
  QuestionBody: any;
  Choices: Choice;
  CorrectChoice: any;
  ref: any;
}
export interface Book {
  book_id: any;
  book: any;
  book_en: any;
  total_chapters: any;
  chapters: any;
}
export interface Choice {
  A: any;
  B: any;
  C: any;
  D: any;
}
export interface AnswerDto {
  Question_Index: number;
  answer: number;
}
