 
import Icon from "@/components/ui/icon";
import { Song } from "./data";

interface TabVerdictProps {
  songs: Song[];
  activeCard: number | null;
  setActiveCard: (id: number | null) => void;
  handleVote: (id: number) => void;
}

const CRITERIA_LABELS: Record<string, string> = {
  melody: "Мелодика",
  lyrics: "Текст",
  performance: "Исполнение",
  originality: "Оригинальность",
};

export default function TabVerdict({ songs, activeCard, setActiveCard, handleVote }: TabVerdictProps) {
  return (
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
            <div
              className="h-full score-bar transition-all duration-700"
              style={{ width: `${(song.score / 10) * 100}%` }}
            />
          </div>

          {activeCard === song.id && (
            <div
              className="mt-4 pt-4 space-y-4 animate-fade-in"
              style={{ borderTop: "1px solid hsl(var(--border))" }}
            >
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(song.criteria).map(([key, val]) => (
                  <div key={key}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-body text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                        {CRITERIA_LABELS[key]}
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
                ))}
              </div>

              <div className="p-3" style={{ background: "hsl(var(--muted))", borderLeft: `2px solid ${song.color}` }}>
                <p
                  className="font-body text-xs uppercase tracking-widest mb-1"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
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
  );
}
