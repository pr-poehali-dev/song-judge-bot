/* eslint-disable @typescript-eslint/no-explicit-any */
import Icon from "@/components/ui/icon";

export default function TabProfile() {
  return (
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
  );
}
