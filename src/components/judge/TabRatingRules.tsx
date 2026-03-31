/* eslint-disable @typescript-eslint/no-explicit-any */
import Icon from "@/components/ui/icon";
import { RATING, VERDICTS } from "./data";

const RULES = [
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
];

export function TabRating() {
  return (
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
                color:
                  item.rank === 1
                    ? "hsl(var(--gold))"
                    : item.rank <= 3
                    ? "hsl(var(--foreground))"
                    : "hsl(var(--muted-foreground))",
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
              {item.change === 0 && (
                <span style={{ color: "hsl(var(--muted-foreground))", fontSize: "10px" }}>—</span>
              )}
            </div>
            <div className="font-display text-xl font-light flex-shrink-0" style={{ color: "hsl(var(--gold))" }}>
              {item.score}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TabRules() {
  return (
    <div className="animate-slide-up space-y-4">
      <h2 className="font-display text-2xl font-light mb-2">Устав трибунала</h2>

      {RULES.map((rule, i) => (
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
  );
}
