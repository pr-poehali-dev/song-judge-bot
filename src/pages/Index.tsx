/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Icon from "@/components/ui/icon";

type Tab = "verdict" | "profile" | "rating" | "rules";

const SONGS = [
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

const RATING = [
  { rank: 1, title: "Группа крови", artist: "Кино", score: 9.6, change: 0 },
  { rank: 2, title: "Нежность", artist: "Кристалинская", score: 9.2, change: 1 },
  { rank: 3, title: "Позови меня с собой", artist: "Пугачёва", score: 8.7, change: -1 },
  { rank: 4, title: "Белый день", artist: "Цой", score: 8.4, change: 2 },
  { rank: 5, title: "Чёрный кот", artist: "Миронова", score: 8.1, change: 0 },
  { rank: 6, title: "За того парня", artist: "Бернес", score: 7.9, change: -2 },
  { rank: 7, title: "Листья жёлтые", artist: "Антонов", score: 7.6, change: 1 },
];

const VERDICTS = [
  { score: [9.5, 10], label: "Шедевр", color: "hsl(42,60%,68%)" },
  { score: [8.5, 9.5], label: "Выдающееся", color: "hsl(160,50%,55%)" },
  { score: [7.0, 8.5], label: "Достойное", color: "hsl(200,50%,60%)" },
  { score: [5.0, 7.0], label: "Среднее", color: "hsl(30,50%,55%)" },
  { score: [0, 5.0], label: "Неудовлетворительно", color: "hsl(350,55%,50%)" },
];

export default function Index() {
  const [tab, setTab] = useState<Tab>("verdict");
  const [songs, setSongs] = useState(SONGS);
  const [activeCard, setActiveCard] = useState<number | null>(1);

  const handleVote = (id: number) => {
    setSongs((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, votes: s.userVoted ? s.votes - 1 : s.votes + 1, userVoted: !s.userVoted }
          : s
      )
    );
  };

  return (
    <div className="min-h-screen bg-background relative">
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, hsl(42 30% 12% / 0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 pb-24">
        {/* HEADER */}
        <header className="pt-10 pb-6 text-center animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="gold-line w-12" />
            <span className="nav-item" style={{ color: "hsl(var(--gold-dim))" }}>
              Музыкальный Трибунал
            </span>
            <div className="gold-line w-12" />
          </div>
          <h1 className="font-display text-5xl font-light tracking-wide mb-1">
            Судья <span className="shimmer-text font-normal italic">Песен</span>
          </h1>
          <p className="font-body text-xs tracking-widest uppercase mt-2" style={{ color: "hsl(var(--muted-foreground))" }}>
            Профессиональная оценка музыки
          </p>
        </header>

        {/* NAV */}
        <nav className="flex justify-center mb-8 animate-fade-in">
          <div
            className="flex gap-0 border"
            style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--card))" }}
          >
            {(
              [
                { id: "verdict", label: "Оценка", icon: "Gavel" },
                { id: "profile", label: "Профиль", icon: "User" },
                { id: "rating", label: "Рейтинг", icon: "Trophy" },
                { id: "rules", label: "Правила", icon: "BookOpen" },
              ] as { id: Tab; label: string; icon: string }[]
            ).map((item) => (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className="flex flex-col items-center gap-1 px-4 py-3 nav-item transition-all"
                style={{
                  color: tab === item.id ? "hsl(var(--primary-foreground))" : "hsl(var(--muted-foreground))",
                  background: tab === item.id ? "hsl(var(--gold))" : "transparent",
                  borderRight: "1px solid hsl(var(--border))",
                }}
              >
                <Icon name={item.icon as any} size={14} />
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        {/* ── ОЦЕНКА ── */}
        {tab === "verdict" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2 animate-slide-up">
              <h2 className="font-display text-2xl font-light">Разбор композиций</h2>
              <span className="nav-item" style={{ color: "hsl(var(--muted-foreground))" }}>
                {songs.length} трека
              </span>
            </div>

            {songs.map((song, i) => (
              <div
                key={song.id}
                className={`verdict-card p-5 cursor-pointer animate-slide-up stagger-${i + 1}`}
                onClick={() => setActiveCard(activeCard === song.id ? null : song.id)}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="nav-item" style={{ color: song.color, opacity: 0.8 }}>
                        {song.genre}
                      </span>
                      <span className="nav-item" style={{ color: "hsl(var(--muted-foreground))" }}>
                        · {song.year}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-medium truncate">{song.title}</h3>
                    <p className="font-body text-sm mt-0.5" style={{ color: "hsl(var(--muted-foreground))" }}>
                      {song.artist}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-display text-4xl font-light leading-none" style={{ color: song.color }}>
                      {song.score}
                    </div>
                    <div className="nav-item mt-1" style={{ color: song.color, opacity: 0.7 }}>
                      {song.verdict}
                    </div>
                  </div>
                </div>

                <div className="mt-3 h-0.5 rounded-full overflow-hidden" style={{ background: "hsl(var(--border))" }}>
                  <div className="h-full score-bar transition-all duration-700" style={{ width: `${(song.score / 10) * 100}%` }} />
                </div>

                {activeCard === song.id && (
                  <div
                    className="mt-4 pt-4 space-y-4 animate-fade-in"
                    style={{ borderTop: "1px solid hsl(var(--border))" }}
                  >
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(song.criteria).map(([key, val]) => {
                        const labels: Record<string, string> = {
                          melody: "Мелодика",
                          lyrics: "Текст",
                          performance: "Исполнение",
                          originality: "Оригинальность",
                        };
                        return (
                          <div key={key}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-body text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                                {labels[key]}
                              </span>
                              <span className="font-display text-sm">{val}</span>
                            </div>
                            <div className="h-0.5 rounded-full overflow-hidden" style={{ background: "hsl(var(--border))" }}>
                              <div
                                className="h-full transition-all duration-500"
                                style={{ width: `${(val / 10) * 100}%`, background: song.color, opacity: 0.7 }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="p-3" style={{ background: "hsl(var(--muted))", borderLeft: `2px solid ${song.color}` }}>
                      <p className="font-body text-xs uppercase tracking-widest mb-1" style={{ color: "hsl(var(--muted-foreground))" }}>
                        Вердикт судьи
                      </p>
                      <p className="font-display text-base italic font-light leading-relaxed">
                        «{song.judge_comment}»
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-body text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                        Голосов подписчиков
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="font-display text-lg">{song.votes.toLocaleString("ru")}</span>
                        <button
                          onClick={(e) => { e.stopPropagation(); handleVote(song.id); }}
                          className="flex items-center gap-1.5 px-3 py-1.5 nav-item transition-all"
                          style={{
                            border: "1px solid",
                            borderColor: song.userVoted ? song.color : "hsl(var(--border))",
                            color: song.userVoted ? song.color : "hsl(var(--muted-foreground))",
                            background: song.userVoted ? `${song.color}18` : "transparent",
                          }}
                        >
                          <Icon name="Heart" size={12} />
                          {song.userVoted ? "Выбрано" : "Голосовать"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ── ПРОФИЛЬ ── */}
        {tab === "profile" && (
          <div className="animate-slide-up space-y-4">
            <div
              className="verdict-card p-6 text-center"
              style={{ background: "linear-gradient(135deg, hsl(20 10% 9%) 0%, hsl(20 10% 12%) 100%)" }}
            >
              <div
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                style={{ border: "1px solid hsl(var(--gold) / 0.4)", background: "hsl(var(--gold) / 0.08)" }}
              >
                <Icon name="User" size={28} style={{ color: "hsl(var(--gold))" } as any} />
              </div>
              <h2 className="font-display text-2xl font-medium mb-1">Подписчик канала</h2>
              <p className="nav-item" style={{ color: "hsl(var(--muted-foreground))" }}>
                Член музыкального трибунала
              </p>
              <div className="gold-line my-5" />
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Голосов", value: "12" },
                  { label: "Точность", value: "94%" },
                  { label: "Ранг", value: "★★★" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display text-2xl font-light mb-0.5" style={{ color: "hsl(var(--gold))" }}>
                      {stat.value}
                    </div>
                    <div className="nav-item" style={{ color: "hsl(var(--muted-foreground))" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="verdict-card p-5">
              <h3 className="font-display text-lg font-medium mb-4">История голосований</h3>
              <div className="space-y-3">
                {[
                  { title: "Позови меня с собой", artist: "Пугачёва", score: 8.7, date: "28 мар" },
                  { title: "Белый день", artist: "Цой", score: 8.4, date: "25 мар" },
                  { title: "Листья жёлтые", artist: "Антонов", score: 7.6, date: "20 мар" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center justify-between py-2"
                    style={{ borderBottom: "1px solid hsl(var(--border))" }}
                  >
                    <div>
                      <p className="font-body text-sm font-medium">{item.title}</p>
                      <p className="font-body text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                        {item.artist} · {item.date}
                      </p>
                    </div>
                    <span className="font-display text-xl" style={{ color: "hsl(var(--gold))" }}>
                      {item.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="verdict-card p-5">
              <h3 className="font-display text-lg font-medium mb-4">Достижения</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: "Music", label: "Меломан", earned: true },
                  { icon: "Star", label: "Знаток", earned: true },
                  { icon: "Award", label: "Эксперт", earned: false },
                  { icon: "Flame", label: "Серия", earned: false },
                  { icon: "Crown", label: "Трибун", earned: false },
                  { icon: "Zap", label: "Активист", earned: true },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className="flex flex-col items-center gap-1 p-3"
                    style={{
                      background: badge.earned ? "hsl(var(--gold) / 0.08)" : "hsl(var(--muted))",
                      border: `1px solid ${badge.earned ? "hsl(var(--gold) / 0.3)" : "hsl(var(--border))"}`,
                      opacity: badge.earned ? 1 : 0.4,
                    }}
                  >
                    <Icon
                      name={badge.icon as any}
                      size={18}
                      style={{ color: badge.earned ? "hsl(var(--gold))" : "hsl(var(--muted-foreground))" } as any}
                    />
                    <span
                      className="nav-item text-center"
                      style={{
                        color: badge.earned ? "hsl(var(--gold))" : "hsl(var(--muted-foreground))",
                        fontSize: "0.6rem",
                      }}
                    >
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── РЕЙТИНГ ── */}
        {tab === "rating" && (
          <div className="animate-slide-up space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-display text-2xl font-light">Таблица почёта</h2>
              <span className="nav-item" style={{ color: "hsl(var(--muted-foreground))" }}>
                Март 2026
              </span>
            </div>

            <div
              className="verdict-card p-5 mb-2"
              style={{
                background: "linear-gradient(135deg, hsl(42 20% 8%) 0%, hsl(20 10% 10%) 100%)",
                border: "1px solid hsl(var(--gold) / 0.2)",
              }}
            >
              <p className="nav-item text-center mb-4" style={{ color: "hsl(var(--gold-dim))" }}>
                🏆 Победитель месяца
              </p>
              <div className="text-center">
                <div className="font-display text-3xl font-medium mb-1">Группа крови</div>
                <div className="font-body text-sm mb-3" style={{ color: "hsl(var(--muted-foreground))" }}>
                  Кино · 1988
                </div>
                <div className="font-display text-5xl font-light shimmer-text">9.6</div>
              </div>
            </div>

            <div className="verdict-card overflow-hidden">
              {RATING.map((item, i) => (
                <div
                  key={item.rank}
                  className="flex items-center gap-4 px-5 py-3 transition-colors hover:bg-white/[0.02]"
                  style={{ borderBottom: i < RATING.length - 1 ? "1px solid hsl(var(--border))" : "none" }}
                >
                  <div
                    className="font-display text-2xl font-light w-8 text-center flex-shrink-0"
                    style={{
                      color: item.rank === 1 ? "hsl(var(--gold))" : item.rank <= 3 ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
                    }}
                  >
                    {item.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-sm font-medium truncate">{item.title}</p>
                    <p className="font-body text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                      {item.artist}
                    </p>
                  </div>
                  <div className="flex items-center gap-0.5 w-6">
                    {item.change > 0 && <Icon name="TrendingUp" size={12} style={{ color: "hsl(160,50%,55%)" } as any} />}
                    {item.change < 0 && <Icon name="TrendingDown" size={12} style={{ color: "hsl(350,55%,50%)" } as any} />}
                    {item.change === 0 && <span style={{ color: "hsl(var(--muted-foreground))", fontSize: "10px" }}>—</span>}
                  </div>
                  <div className="font-display text-xl font-light flex-shrink-0" style={{ color: "hsl(var(--gold))" }}>
                    {item.score}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── ПРАВИЛА ── */}
        {tab === "rules" && (
          <div className="animate-slide-up space-y-4">
            <h2 className="font-display text-2xl font-light mb-2">Устав трибунала</h2>

            {[
              {
                num: "I",
                title: "Система оценок",
                icon: "Gavel",
                content:
                  "Каждая композиция оценивается по шкале от 0 до 10 по четырём критериям: мелодика, текст, исполнение и оригинальность. Итоговая оценка — среднее взвешенное значение.",
              },
              {
                num: "II",
                title: "Вердикты",
                icon: "Scale",
                content:
                  "9.5–10.0: Шедевр · 8.5–9.4: Выдающееся · 7.0–8.4: Достойное · 5.0–6.9: Среднее · 0–4.9: Неудовлетворительно",
              },
              {
                num: "III",
                title: "Голосование",
                icon: "Heart",
                content:
                  "Каждый подписчик канала может проголосовать за понравившуюся композицию. Голос засчитывается один раз. Голосование открыто 7 дней с момента публикации оценки.",
              },
              {
                num: "IV",
                title: "Периодичность",
                icon: "Calendar",
                content:
                  "Новая оценка выходит каждую неделю. Ежемесячно составляется рейтинг лучших и худших треков по мнению подписчиков.",
              },
              {
                num: "V",
                title: "Апелляция",
                icon: "MessageSquare",
                content:
                  "Подписчики могут предложить трек для разбора в комментариях к закреплённому сообщению. Судья рассматривает предложения и выносит решение о включении в программу.",
              },
            ].map((rule, i) => (
              <div key={rule.num} className={`verdict-card p-5 animate-slide-up stagger-${i + 1}`}>
                <div className="flex items-start gap-4">
                  <div
                    className="font-display text-3xl font-light flex-shrink-0 leading-none mt-0.5"
                    style={{ color: "hsl(var(--gold) / 0.4)" }}
                  >
                    {rule.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name={rule.icon as any} size={14} style={{ color: "hsl(var(--gold))" } as any} />
                      <h3 className="font-display text-lg font-medium">{rule.title}</h3>
                    </div>
                    <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                      {rule.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="verdict-card p-5">
              <h3 className="font-display text-lg font-medium mb-4">Шкала вердиктов</h3>
              <div className="space-y-3">
                {VERDICTS.map((v) => (
                  <div key={v.label} className="flex items-center gap-3">
                    <div className="w-2 h-2 flex-shrink-0" style={{ background: v.color }} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-body text-sm">{v.label}</span>
                        <span className="font-display text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                          {v.score[0]}–{v.score[1]}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-0">
        <div className="h-24" style={{ background: "linear-gradient(to top, hsl(20 10% 6%), transparent)" }} />
      </div>
    </div>
  );
}