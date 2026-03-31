import { useState } from "react";
import Icon from "@/components/ui/icon";
import { SONGS, Tab } from "@/components/judge/data";
import TabVerdict from "@/components/judge/TabVerdict";
import TabProfile from "@/components/judge/TabProfile";
import { TabRating, TabRules } from "@/components/judge/TabRatingRules";

const NAV_ITEMS: { id: Tab; label: string; icon: string }[] = [
  { id: "verdict", label: "Оценка", icon: "Gavel" },
  { id: "profile", label: "Профиль", icon: "User" },
  { id: "rating", label: "Рейтинг", icon: "Trophy" },
  { id: "rules", label: "Правила", icon: "BookOpen" },
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
          <p
            className="font-body text-xs tracking-widest uppercase mt-2"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Профессиональная оценка музыки
          </p>
        </header>

        {/* NAV */}
        <nav className="flex justify-center mb-8 animate-fade-in">
          <div
            className="flex gap-0 border"
            style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--card))" }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className="flex flex-col items-center gap-1 px-4 py-3 nav-item transition-all"
                style={{
                  color:
                    tab === item.id ? "hsl(var(--primary-foreground))" : "hsl(var(--muted-foreground))",
                  background: tab === item.id ? "hsl(var(--gold))" : "transparent",
                  borderRight: "1px solid hsl(var(--border))",
                }}
              >
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <Icon name={item.icon as any} size={14} />
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        {tab === "verdict" && (
          <TabVerdict
            songs={songs}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            handleVote={handleVote}
          />
        )}
        {tab === "profile" && <TabProfile />}
        {tab === "rating" && <TabRating />}
        {tab === "rules" && <TabRules />}
      </div>

      <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-0">
        <div
          className="h-24"
          style={{ background: "linear-gradient(to top, hsl(20 10% 6%), transparent)" }}
        />
      </div>
    </div>
  );
}
