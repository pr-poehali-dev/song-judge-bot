export type Tab = "verdict" | "profile" | "rating" | "rules";

export interface Song {
  id: number;
  title: string;
  artist: string;
  year: number;
  genre: string;
  score: number;
  votes: number;
  verdict: string;
  color: string;
  criteria: { melody: number; lyrics: number; performance: number; originality: number };
  judge_comment: string;
  userVoted: boolean;
}

export interface RatingItem {
  rank: number;
  title: string;
  artist: string;
  score: number;
  change: number;
}

export interface VerdictScale {
  score: number[];
  label: string;
  color: string;
}

export const SONGS: Song[] = [
  {
    id: 1,
    title: "Нежность",
    artist: "Майя Кристалинская",
    year: 1966,
    genre: "Советская лирика",
    score: 9.2,
    votes: 1847,
    verdict: "Выдающееся",
    color: "hsl(42,60%,68%)",
    criteria: { melody: 9.5, lyrics: 9.1, performance: 9.0, originality: 8.8 },
    judge_comment:
      "Образец чистоты советской лирики. Мелодия обезоруживает своей простотой и при этом остаётся в памяти навсегда.",
    userVoted: false,
  },
  {
    id: 2,
    title: "Позови меня с собой",
    artist: "Алла Пугачёва",
    year: 1987,
    genre: "Поп",
    score: 8.7,
    votes: 2103,
    verdict: "Достойное",
    color: "hsl(350,60%,55%)",
    criteria: { melody: 8.9, lyrics: 8.5, performance: 9.2, originality: 8.2 },
    judge_comment:
      "Вокальная интерпретация поднимает материал до высоты, недостижимой для большинства исполнителей эпохи.",
    userVoted: true,
  },
  {
    id: 3,
    title: "Группа крови",
    artist: "Кино",
    year: 1988,
    genre: "Рок",
    score: 9.6,
    votes: 3291,
    verdict: "Шедевр",
    color: "hsl(200,60%,55%)",
    criteria: { melody: 9.4, lyrics: 9.8, performance: 9.5, originality: 9.7 },
    judge_comment:
      "Эта запись изменила русскоязычную музыку навсегда. Цой создал текст, который одновременно личный и универсальный.",
    userVoted: false,
  },
];

export const RATING: RatingItem[] = [
  { rank: 1, title: "Группа крови", artist: "Кино", score: 9.6, change: 0 },
  { rank: 2, title: "Нежность", artist: "Кристалинская", score: 9.2, change: 1 },
  { rank: 3, title: "Позови меня с собой", artist: "Пугачёва", score: 8.7, change: -1 },
  { rank: 4, title: "Белый день", artist: "Цой", score: 8.4, change: 2 },
  { rank: 5, title: "Чёрный кот", artist: "Миронова", score: 8.1, change: 0 },
  { rank: 6, title: "За того парня", artist: "Бернес", score: 7.9, change: -2 },
  { rank: 7, title: "Листья жёлтые", artist: "Антонов", score: 7.6, change: 1 },
];

export const VERDICTS: VerdictScale[] = [
  { score: [9.5, 10], label: "Шедевр", color: "hsl(42,60%,68%)" },
  { score: [8.5, 9.5], label: "Выдающееся", color: "hsl(160,50%,55%)" },
  { score: [7.0, 8.5], label: "Достойное", color: "hsl(200,50%,60%)" },
  { score: [5.0, 7.0], label: "Среднее", color: "hsl(30,50%,55%)" },
  { score: [0, 5.0], label: "Неудовлетворительно", color: "hsl(350,55%,50%)" },
];
