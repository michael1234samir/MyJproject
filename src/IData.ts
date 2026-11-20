import { JwtPayload } from 'jwt-decode';

export interface Makhdoom {
  password?: string;
  Family?: string;
  family_Name?: string;
  phoneNumber?: string;
  father_Confessor?: string;
  Name?: string;
  full_Name?: string;
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
export interface saint {
  id?: number;
  SaintId?: number;
  OpenedAt?: Date;
  ClosedAt?: Date;
  name_ar?: string;
  nickname?: string;
  birth_year?: string;
  departure_year?: string;
  age_at_departure?: string;
  birth_place?: string;
  country?: string;
  short_bio?: string;
  verse_for_meditation?: string;
  competition?: competition[];
  life_stages?: LifeStage[];
}
export interface LifeStage {
  SaintId?: number;
  stage_key?: string;
  stage_title?: string;
  stage_verse?: string;
  stage_order?: number;
  summary?: string;
  detials?: string;
  questions: Question[];
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
export interface book {
  id: number;
  title: string;
  description: string;
  chapters: number;
  category: string;
  icon: string;
  english_name: string;
  testament: string;
  progress: number;
  done_chapters: number;
}
export interface competition {
  competition_id?: Number;
  verse_for_memorization?: string;
  verse_for_meditation?: string;
  competition_title?: string;
  family?: string;
  bonus?: number;
  finished__At?: Date;
  Opened__At?: Date;
  verses?: Verse[];
  Created_At?: Date;
  questions?: CompQuestion[];
  SaintId?: number;
  stage_key?: string;
  stage_title?: string;
  stage_verse?: string;
  stage_order?: number;
  summary?: string;
  detials?: string;
}
export interface Verse {
  text: string;
  explanation: string;
}
export interface UserComp {
  competition_id?: number;
  correct_answers?: number;
  Family?: string;
  CompletedAt?: Date;
  score?: number;
  bonus?: number;
  User?: MakhdoomResponse[];
  competition?: competition;
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
