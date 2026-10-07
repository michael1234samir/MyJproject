import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  imports: [CommonModule],

  selector: 'app-competitions',
  styleUrl: './competitions.css',
  templateUrl: './competitions.html',
})
export class Competitions {
  books = signal<Book[]>([
    {
      book_id: 1,
      book: 'التكوين',
      book_en: 'Genesis',
      total_chapters: 50,
      chapters: [
        25, 22, 24, 26, 32, 22, 24, 22, 29, 32, 32, 20, 18, 24, 21, 16, 27, 33, 38, 18, 34, 24, 20,
        67, 34, 35, 46, 22, 35, 43, 55, 32, 20, 31, 29, 43, 36, 30, 23, 23, 57, 38, 34, 34, 28, 34,
        31, 22, 33, 26,
      ],
    },
    {
      book_id: 2,
      book: 'الخروج',
      book_en: 'Exodus',
      total_chapters: 40,
      chapters: [
        22, 25, 22, 31, 23, 30, 25, 32, 35, 29, 10, 51, 22, 31, 27, 36, 16, 27, 25, 26, 36, 31, 33,
        18, 40, 37, 21, 43, 46, 38, 18, 35, 23, 35, 35, 38, 29, 31, 43, 38,
      ],
    },
    {
      book_id: 3,
      book: 'اللاويين',
      book_en: 'Leviticus',
      total_chapters: 27,
      chapters: [
        17, 16, 17, 35, 19, 30, 38, 36, 24, 20, 47, 8, 59, 57, 33, 34, 16, 30, 37, 27, 24, 33, 44,
        23, 55, 46, 34,
      ],
    },
    {
      book_id: 4,
      book: 'العدد',
      book_en: 'Numbers',
      total_chapters: 36,
      chapters: [
        54, 34, 51, 49, 31, 27, 89, 26, 23, 36, 35, 16, 33, 45, 41, 50, 13, 32, 22, 29, 35, 41, 30,
        25, 18, 65, 23, 31, 40, 16, 54, 42, 56, 29, 34, 13,
      ],
    },
    {
      book_id: 5,
      book: 'التثنية',
      book_en: 'Deuteronomy',
      total_chapters: 34,
      chapters: [
        46, 37, 29, 49, 33, 25, 26, 20, 29, 22, 32, 32, 18, 29, 23, 22, 20, 22, 21, 20, 23, 30, 25,
        22, 19, 19, 26, 68, 29, 20, 30, 52, 29, 12,
      ],
    },
    {
      book_id: 6,
      book: 'يشوع',
      book_en: 'Joshua',
      total_chapters: 24,
      chapters: [
        18, 24, 17, 24, 15, 27, 26, 35, 27, 43, 23, 24, 33, 15, 63, 10, 18, 28, 51, 9, 45, 34, 16,
        33,
      ],
    },
    {
      book_id: 7,
      book: 'القضاة',
      book_en: 'Judges',
      total_chapters: 21,
      chapters: [
        36, 23, 31, 24, 31, 40, 25, 35, 57, 18, 40, 15, 25, 20, 20, 31, 13, 31, 30, 48, 25,
      ],
    },
    { book_id: 8, book: 'راعوث', book_en: 'Ruth', total_chapters: 4, chapters: [22, 23, 18, 22] },
    {
      book_id: 9,
      book: 'صموئيل الأول',
      book_en: '1 Samuel',
      total_chapters: 31,
      chapters: [
        28, 36, 21, 22, 12, 21, 17, 22, 27, 27, 15, 25, 23, 23, 35, 23, 58, 30, 24, 42, 15, 23, 29,
        22, 44, 25, 12, 25, 11, 31, 13,
      ],
    },
    {
      book_id: 10,
      book: 'صموئيل الثاني',
      book_en: '2 Samuel',
      total_chapters: 24,
      chapters: [
        27, 32, 39, 12, 25, 23, 29, 18, 13, 19, 27, 31, 39, 33, 37, 23, 29, 33, 43, 26, 22, 51, 39,
        25,
      ],
    },
    {
      book_id: 11,
      book: 'الملوك الأول',
      book_en: '1 Kings',
      total_chapters: 22,
      chapters: [
        53, 46, 28, 34, 18, 38, 51, 66, 28, 29, 43, 33, 34, 31, 34, 34, 24, 46, 21, 43, 29, 53,
      ],
    },
    {
      book_id: 12,
      book: 'الملوك الثاني',
      book_en: '2 Kings',
      total_chapters: 25,
      chapters: [
        18, 25, 27, 44, 27, 33, 20, 29, 37, 36, 21, 21, 25, 29, 38, 20, 41, 37, 37, 21, 26, 20, 37,
        20, 30,
      ],
    },
    {
      book_id: 13,
      book: 'أخبار الأيام الأول',
      book_en: '1 Chronicles',
      total_chapters: 29,
      chapters: [
        54, 55, 24, 43, 26, 81, 40, 40, 44, 14, 47, 40, 14, 17, 29, 43, 27, 17, 19, 8, 30, 19, 32,
        31, 31, 32, 34, 21, 30,
      ],
    },
    {
      book_id: 14,
      book: 'أخبار الأيام الثاني',
      book_en: '2 Chronicles',
      total_chapters: 36,
      chapters: [
        17, 18, 17, 22, 14, 42, 22, 18, 31, 19, 23, 16, 22, 15, 19, 14, 19, 34, 11, 37, 20, 12, 21,
        27, 28, 23, 9, 27, 36, 27, 21, 33, 25, 33, 27, 23,
      ],
    },
    {
      book_id: 15,
      book: 'عزرا',
      book_en: 'Ezra',
      total_chapters: 10,
      chapters: [11, 70, 13, 24, 17, 22, 28, 36, 15, 44],
    },
    {
      book_id: 16,
      book: 'نحميا',
      book_en: 'Nehemiah',
      total_chapters: 13,
      chapters: [11, 20, 32, 23, 19, 19, 73, 18, 38, 39, 36, 47, 31],
    },
    {
      book_id: 17,
      book: 'أستير',
      book_en: 'Esther',
      total_chapters: 10,
      chapters: [22, 23, 15, 17, 14, 14, 10, 17, 32, 3],
    },
    {
      book_id: 18,
      book: 'أيوب',
      book_en: 'Job',
      total_chapters: 42,
      chapters: [
        22, 13, 26, 21, 27, 30, 21, 22, 35, 22, 20, 25, 28, 22, 35, 22, 16, 21, 29, 29, 34, 30, 17,
        25, 6, 14, 23, 28, 25, 31, 40, 22, 33, 37, 16, 33, 24, 41, 30, 24, 34, 17,
      ],
    },
    {
      book_id: 19,
      book: 'المزامير',
      book_en: 'Psalms',
      total_chapters: 150,
      chapters: [
        6, 12, 8, 8, 12, 10, 17, 9, 20, 18, 7, 8, 6, 7, 5, 11, 15, 50, 14, 9, 13, 31, 6, 10, 22, 12,
        14, 9, 11, 12, 24, 11, 22, 22, 28, 12, 40, 22, 13, 17, 13, 11, 5, 26, 17, 11, 9, 14, 20, 23,
        19, 9, 6, 7, 23, 13, 11, 11, 17, 12, 8, 12, 11, 10, 13, 20, 7, 35, 36, 5, 24, 20, 28, 23,
        10, 12, 20, 72, 13, 19, 16, 8, 18, 12, 13, 17, 7, 18, 52, 17, 16, 15, 5, 23, 11, 13, 12, 9,
        9, 5, 8, 28, 22, 35, 45, 48, 43, 13, 31, 7, 10, 10, 9, 8, 18, 19, 2, 29, 176, 7, 8, 9, 4, 8,
        5, 6, 5, 6, 8, 8, 3, 18, 3, 3, 21, 13, 9, 24, 13, 10, 7, 12, 15, 21, 10, 20, 14, 9, 6,
      ],
    },
    {
      book_id: 20,
      book: 'الأمثال',
      book_en: 'Proverbs',
      total_chapters: 31,
      chapters: [
        33, 22, 35, 27, 23, 35, 27, 36, 18, 32, 31, 28, 25, 35, 33, 33, 28, 24, 29, 30, 31, 29, 35,
        34, 28, 28, 27, 28, 27, 33, 31,
      ],
    },
    {
      book_id: 21,
      book: 'الجامعة',
      book_en: 'Ecclesiastes',
      total_chapters: 12,
      chapters: [18, 26, 22, 16, 20, 12, 29, 17, 18, 20, 10, 14],
    },
    {
      book_id: 22,
      book: 'نشيد الأنشاد',
      book_en: 'Song of Solomon',
      total_chapters: 8,
      chapters: [17, 17, 11, 16, 16, 13, 13, 14],
    },
    {
      book_id: 23,
      book: 'إشعياء',
      book_en: 'Isaiah',
      total_chapters: 66,
      chapters: [
        31, 22, 26, 6, 30, 13, 25, 22, 21, 34, 16, 6, 22, 32, 9, 14, 14, 7, 25, 6, 17, 25, 18, 23,
        12, 21, 13, 29, 24, 33, 9, 20, 24, 17, 10, 22, 38, 22, 8, 31, 29, 25, 28, 28, 25, 13, 15,
        22, 26, 11, 23, 15, 12, 17, 13, 12, 21, 14, 21, 22, 11, 12, 19, 12, 25, 24,
      ],
    },
    {
      book_id: 24,
      book: 'إرميا',
      book_en: 'Jeremiah',
      total_chapters: 52,
      chapters: [
        19, 37, 25, 31, 31, 30, 34, 22, 26, 25, 23, 17, 27, 22, 21, 21, 27, 23, 15, 18, 14, 30, 40,
        10, 38, 24, 22, 17, 32, 24, 40, 44, 26, 22, 19, 32, 21, 28, 18, 16, 18, 22, 13, 30, 5, 28,
        7, 47, 39, 46, 64, 34,
      ],
    },
    {
      book_id: 25,
      book: 'مراثي إرميا',
      book_en: 'Lamentations',
      total_chapters: 5,
      chapters: [22, 22, 66, 22, 22],
    },
    {
      book_id: 26,
      book: 'حزقيال',
      book_en: 'Ezekiel',
      total_chapters: 48,
      chapters: [
        28, 10, 27, 17, 17, 14, 27, 18, 11, 22, 25, 28, 23, 23, 8, 63, 24, 32, 14, 49, 32, 31, 49,
        27, 17, 21, 36, 26, 21, 26, 18, 32, 33, 31, 15, 38, 28, 23, 29, 49, 26, 20, 27, 31, 25, 24,
        23, 35,
      ],
    },
    {
      book_id: 27,
      book: 'دانيال',
      book_en: 'Daniel',
      total_chapters: 12,
      chapters: [21, 49, 30, 37, 31, 28, 28, 27, 27, 21, 45, 13],
    },
    {
      book_id: 28,
      book: 'هوشع',
      book_en: 'Hosea',
      total_chapters: 14,
      chapters: [11, 23, 5, 19, 15, 11, 16, 14, 17, 15, 12, 14, 16, 9],
    },
    { book_id: 29, book: 'يوئيل', book_en: 'Joel', total_chapters: 3, chapters: [20, 32, 21] },
    {
      book_id: 30,
      book: 'عاموس',
      book_en: 'Amos',
      total_chapters: 9,
      chapters: [15, 16, 15, 13, 27, 14, 17, 14, 15],
    },
    { book_id: 31, book: 'عوبديا', book_en: 'Obadiah', total_chapters: 1, chapters: [21] },
    { book_id: 32, book: 'يونان', book_en: 'Jonah', total_chapters: 4, chapters: [17, 10, 10, 11] },
    {
      book_id: 33,
      book: 'ميخا',
      book_en: 'Micah',
      total_chapters: 7,
      chapters: [16, 13, 12, 13, 15, 16, 20],
    },
    { book_id: 34, book: 'ناحوم', book_en: 'Nahum', total_chapters: 3, chapters: [15, 13, 19] },
    { book_id: 35, book: 'حبقوق', book_en: 'Habakkuk', total_chapters: 3, chapters: [17, 20, 19] },
    { book_id: 36, book: 'صفنيا', book_en: 'Zephaniah', total_chapters: 3, chapters: [18, 15, 20] },
    { book_id: 37, book: 'حجي', book_en: 'Haggai', total_chapters: 2, chapters: [15, 23] },
    {
      book_id: 38,
      book: 'زكريا',
      book_en: 'Zechariah',
      total_chapters: 14,
      chapters: [21, 13, 10, 14, 11, 15, 14, 23, 17, 12, 17, 14, 9, 21],
    },
    {
      book_id: 39,
      book: 'ملاخي',
      book_en: 'Malachi',
      total_chapters: 4,
      chapters: [14, 17, 18, 6],
    },
    {
      book_id: 40,
      book: 'متى',
      book_en: 'Matthew',
      total_chapters: 28,
      chapters: [
        25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35, 30, 34, 46, 46, 39,
        51, 46, 75, 66, 20,
      ],
    },
    {
      book_id: 41,
      book: 'مرقس',
      book_en: 'Mark',
      total_chapters: 16,
      chapters: [45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20],
    },
    {
      book_id: 42,
      book: 'لوقا',
      book_en: 'Luke',
      total_chapters: 24,
      chapters: [
        80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43, 48, 47, 38, 71, 56,
        53,
      ],
    },
    {
      book_id: 43,
      book: 'يوحنا',
      book_en: 'John',
      total_chapters: 21,
      chapters: [
        51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40, 42, 31, 25,
      ],
    },
    {
      book_id: 44,
      book: 'أعمال الرسل',
      book_en: 'Acts',
      total_chapters: 28,
      chapters: [
        26, 47, 26, 37, 42, 15, 60, 40, 43, 48, 30, 25, 52, 28, 41, 40, 34, 28, 41, 38, 40, 30, 35,
        27, 27, 32, 44, 31,
      ],
    },
    {
      book_id: 45,
      book: 'رومية',
      book_en: 'Romans',
      total_chapters: 16,
      chapters: [32, 29, 31, 25, 21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 33, 27],
    },
    {
      book_id: 46,
      book: 'كورنثوس الأولى',
      book_en: '1 Corinthians',
      total_chapters: 16,
      chapters: [31, 16, 23, 21, 13, 20, 40, 13, 27, 33, 34, 31, 13, 40, 58, 24],
    },
    {
      book_id: 47,
      book: 'كورنثوس الثانية',
      book_en: '2 Corinthians',
      total_chapters: 13,
      chapters: [24, 17, 18, 18, 21, 18, 16, 24, 15, 18, 33, 21, 14],
    },
    {
      book_id: 48,
      book: 'غلاطية',
      book_en: 'Galatians',
      total_chapters: 6,
      chapters: [24, 21, 29, 31, 26, 18],
    },
    {
      book_id: 49,
      book: 'أفسس',
      book_en: 'Ephesians',
      total_chapters: 6,
      chapters: [23, 22, 21, 32, 33, 24],
    },
    {
      book_id: 50,
      book: 'فيليبي',
      book_en: 'Philippians',
      total_chapters: 4,
      chapters: [30, 30, 21, 23],
    },
    {
      book_id: 51,
      book: 'كولوسي',
      book_en: 'Colossians',
      total_chapters: 4,
      chapters: [29, 23, 25, 18],
    },
    {
      book_id: 52,
      book: 'تسالونيكي الأولى',
      book_en: '1 Thessalonians',
      total_chapters: 5,
      chapters: [10, 20, 13, 18, 28],
    },
    {
      book_id: 53,
      book: 'تسالونيكي الثانية',
      book_en: '2 Thessalonians',
      total_chapters: 3,
      chapters: [12, 17, 18],
    },
    {
      book_id: 54,
      book: 'تيموثاوس الأولى',
      book_en: '1 Timothy',
      total_chapters: 6,
      chapters: [20, 15, 16, 16, 25, 21],
    },
    {
      book_id: 55,
      book: 'تيموثاوس الثانية',
      book_en: '2 Timothy',
      total_chapters: 4,
      chapters: [18, 26, 17, 22],
    },
    { book_id: 56, book: 'طيطس', book_en: 'Titus', total_chapters: 3, chapters: [16, 15, 15] },
    { book_id: 57, book: 'فليمون', book_en: 'Philemon', total_chapters: 1, chapters: [25] },
    {
      book_id: 58,
      book: 'العبرانيين',
      book_en: 'Hebrews',
      total_chapters: 13,
      chapters: [14, 18, 19, 16, 14, 20, 28, 13, 28, 39, 40, 29, 25],
    },
    {
      book_id: 59,
      book: 'يعقوب',
      book_en: 'James',
      total_chapters: 5,
      chapters: [27, 26, 18, 17, 20],
    },
    {
      book_id: 60,
      book: 'بطرس الأولى',
      book_en: '1 Peter',
      total_chapters: 5,
      chapters: [25, 25, 22, 19, 14],
    },
    {
      book_id: 61,
      book: 'بطرس الثانية',
      book_en: '2 Peter',
      total_chapters: 3,
      chapters: [21, 22, 18],
    },
    {
      book_id: 62,
      book: 'يوحنا الأولى',
      book_en: '1 John',
      total_chapters: 5,
      chapters: [10, 29, 24, 21, 21],
    },
    { book_id: 63, book: 'يوحنا الثانية', book_en: '2 John', total_chapters: 1, chapters: [13] },
    { book_id: 64, book: 'يوحنا الثالثة', book_en: '3 John', total_chapters: 1, chapters: [14] },
    { book_id: 65, book: 'يهوذا', book_en: 'Jude', total_chapters: 1, chapters: [25] },
    {
      book_id: 66,
      book: 'رؤيا يوحنا',
      book_en: 'Revelation',
      total_chapters: 22,
      chapters: [
        20, 29, 22, 11, 14, 17, 17, 13, 21, 11, 19, 17, 18, 20, 8, 21, 18, 24, 21, 15, 27, 21,
      ],
    },
  ]);

  Questions = signal<Question[]>([
    {
      QuestionBody:
        '    «مَا هِيَ رَأْسُ الْمَعْرِفَةِ كَمَا وَرَدَ فِي الإِصْحَاحِ الأَوَّلِ مِنْ سِفْرِ الأَمْثَالِ؟»',
      Choices: {
        A: 'أ) مَخَافَةُ الرَّبِّ',
        B: 'ب) كَثْرَةُ الْقِرَاءَةِ',
        C: 'ج) سَمَاعُ مَشُورَةِ الأَصْدِقَاءِ',
        D: 'د) حِفْظُ الأَسْرَارِ',
      },
      CorrectChoice: 'A',
      ref: ' «مَخَافَةُ الرَّبِّ رَأْسُ الْمَعْرِفَةِ، أَمَّا الْجَاهِلُونَ فَيَحْتَقِرُونَ الْحِكْمَةَ وَالأَدَبَ» (أم 1: 7)',
    },
    {
      QuestionBody: '«إِذَا أَرَاغَكَ الْخُطَاةُ فَمَاذَا تَفْعَلُ حَسَبَ نَصِيحَةِ الْحَكِيمِ؟»',
      Choices: {
        A: 'أ) تَمْشِي مَعَهُمْ لِتُرْشِدَهُمْ',
        B: 'ب) فَلاَ تَرْضَ وَامْنَعْ رِجْلَكَ عَنْ مَسَالِكِهِمْ',
        C: 'ج) تُجَادِلُهُمْ طَوِيلاً',
        D: 'د) تَسْكُتُ فَقَطْ',
      },
      CorrectChoice: 'B',
      ref: '«يَا ابْنِي، إِنْ أَرَاغَكَ الْخُطَاةُ فَلاَ تَرْضَ... اِمْنَعْ رِجْلَكَ عَنْ مَسَالِكِهِمْ» (أم 1: 10، 15)',
    },
    {
      QuestionBody:
        '«الْحِكْمَةُ تُنَادِي فِي الْخَارِجِ...» أَيْنَ تَرْفَعُ صَوْتَهَا كَمَا جَاءَ بِالنَّصِّ؟»',
      Choices: {
        A: 'أ) فِي الْقُصُورِ فَقَطْ',
        B: 'ب) فِي الأَسْوَاقِ وَعِنْدَ مَدَاخِلِ الأَبْوَابِ',
        C: 'ج) فِي الْبَرَارِي وَالْقِفَارِ',
        D: 'د) بَيْنَ الْعُلَمَاءِ سِرّاً',
      },
      CorrectChoice: 'B',
      ref: '«الْحِكْمَةُ تُنَادِي فِي الْخَارِجِ. فِي الشَّوَارِعِ تُعْطِي صَوْتَهَا. تَدْعُو فِي رُؤُوسِ الأَسْوَاقِ، فِي مَدَاخِلِ الأَبْوَابِ» (أم 1: 20-21',
    },
  ]);
  Makhdoom = signal<Makhdoom[]>([
    {
      Name_of_the_person: 'كيرلس هاني (بطل الإنجيل)',
      family_and_class: 'أسرة القديس مرقس الرسول',
      completed_competitions: 18,
      daily_series: 18,
      success_rate: 98,
      total_points: 540,
      Phone_Number: '+20 122 458 9162',
      last_shared: 'اليوم (07:15 ص)',
      stage: 1,
    },

    {
      Name_of_the_person: 'مينا سمير (أنت)',
      family_and_class: '	أسرة القديس بولس الرسول',
      completed_competitions: 16,
      daily_series: 7,
      success_rate: 95,
      total_points: 480,
      Phone_Number: '+20 122 458 9162',
      last_shared: 'اليوم (07:15 ص)',
      stage: 1,
    },
    {
      Name_of_the_person: 'مريم يوسف',
      family_and_class: '	أسرة القديسة دميانة',
      completed_competitions: 16,
      daily_series: 12,
      success_rate: 92,
      total_points: 460,
      Phone_Number: '+20 122 458 9162',
      last_shared: 'اليوم (07:15 ص)',
      stage: 1,
    },
    {
      Name_of_the_person: 'فادى ابراهيم',
      family_and_class: '	أسرة القديس بولس الرسول',
      completed_competitions: 15,
      daily_series: 5,
      success_rate: 90,
      total_points: 430,
      Phone_Number: '+20 122 458 9162',
      last_shared: 'اليوم (07:15 ص)',
      stage: 1,
    },
    {
      Name_of_the_person: 'سارة مجدي',
      family_and_class: 'أسرة القديسة دميانه ',
      completed_competitions: 15,
      daily_series: 8,
      success_rate: 88,
      total_points: 410,
      Phone_Number: '+20 122 458 9162',
      last_shared: 'اليوم (07:15 ص)',
      stage: 1,
    },
    {
      Name_of_the_person: 'ايهاب جورج',
      family_and_class: 'اسره القديس مرقس الرسول',
      completed_competitions: 14,
      daily_series: 3,
      success_rate: 86,
      total_points: 390,
      Phone_Number: '+20 122 458 9162',
      last_shared: 'اليوم (07:15 ص)',
      stage: 1,
    },
    {
      Name_of_the_person: 'يوستينا عادل',
      family_and_class: 'اسره القديسه دميانه',
      completed_competitions: 13,
      daily_series: 4,
      success_rate: 85,
      total_points: 370,
      Phone_Number: '+20 122 458 9162',
      last_shared: 'اليوم (07:15 ص)',
      stage: 1,
    },
  ]);
  objectEntries(obj: Choice) {
    return Object.entries(obj).map(([key, value]) => ({ key, value }));
  }
  book: any;
  title: any;
  chapter: any;
  boolean: boolean = false;
  boolean2: boolean = false;
  select(book: any) {
    this.book = book.total_chapters;
    this.title = book.book;
    this.boolean = false;
  }
  selectchapter(book: any) {
    this.chapter = book;
    this.boolean2 = false;
    // this.title = book.book;
  }
  tragger() {
    this.boolean = !this.boolean;
    this.boolean2 = false;
  }
  tragger2() {
    this.boolean2 = !this.boolean2;
    this.boolean = false;
    // this.trigger3();
  }
  trigger3() {
    if (this.boolean) {
      // this.boolean = false;
    }
  }
}
