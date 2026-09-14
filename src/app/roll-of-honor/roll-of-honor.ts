import { Component, NgModule, signal } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-roll-of-honor',
  styleUrl: './roll-of-honor.css',
  templateUrl: './roll-of-honor.html',
})
export class RollOfHonor {
  Makhdoom = signal<Makhdoom[]>([
    {
      Name_of_the_person: 'كيرلس هاني (بطل الإنجيل)',
      family_and_class: 'أسرة القديس مرقس الرسول',
      completed_competitions: 18,
      daily_series: 18,
      success_rate: 98,
      total_points: 540,
    },

    {
      Name_of_the_person: 'مينا سمير (أنت)',
      family_and_class: '	أسرة القديس بولس الرسول',
      completed_competitions: 16,
      daily_series: 7,
      success_rate: 95,
      total_points: 480,
    },
    {
      Name_of_the_person: 'مريم يوسف',
      family_and_class: '	أسرة القديسة دميانة',
      completed_competitions: 16,
      daily_series: 12,
      success_rate: 92,
      total_points: 460,
    },
    {
      Name_of_the_person: 'فادى ابراهيم',
      family_and_class: '	أسرة القديس بولس الرسول',
      completed_competitions: 15,
      daily_series: 5,
      success_rate: 90,
      total_points: 430,
    },
    {
      Name_of_the_person: 'سارة مجدي',
      family_and_class: 'أسرة القديسة دميانه ',
      completed_competitions: 15,
      daily_series: 8,
      success_rate: 88,
      total_points: 410,
    },
    {
      Name_of_the_person: 'ايهاب جورج',
      family_and_class: 'اسره القديس مرقس الرسول',
      completed_competitions: 14,
      daily_series: 3,
      success_rate: 86,
      total_points: 390,
    },
    {
      Name_of_the_person: 'يوستينا عادل',
      family_and_class: 'اسره القديسه دميانه',
      completed_competitions: 13,
      daily_series: 4,
      success_rate: 85,
      total_points: 370,
    },
  ]);
  constructor() {
    this.Makhdoom().sort((a, b) => b.total_points - a.total_points);
  }
  first_Center_in_pain = this.Makhdoom()[0];
  third_Center_in_pain = this.Makhdoom()[2];
  second_Center_in_pain = this.Makhdoom()[1];
  CentresMakhdoom = signal<Makhdoom[]>([
    this.second_Center_in_pain,
    this.first_Center_in_pain,
    this.third_Center_in_pain,
  ]);
}
