export function AppleLogo({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 170 170" fill="currentColor" aria-hidden="true">
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-5.87-8.91-10.43-19.14-13.68-30.7-3.25-11.55-4.88-22.38-4.88-32.48 0-14.77 3.8-27.12 11.4-37.07 7.6-9.95 17.2-15.02 28.8-15.21 4.79 0 10.15 1.25 16.08 3.75 5.93 2.5 9.77 3.8 11.51 3.91 1.95 0 6.07-1.4 12.37-4.19 6.3-2.79 11.9-3.99 16.8-3.6 12.82.65 23.01 5.34 30.56 14.07-11.08 6.74-16.51 16.07-16.3 27.99.21 9.35 3.8 17.15 10.77 23.39 6.96 6.25 15.22 9.8 24.78 10.66-2.39 7.39-5.43 14.78-9.13 22.18zm-26.6-107.68c0 7.39-2.61 14.24-7.83 20.55-5.22 6.31-11.64 10.12-19.26 11.43-.87-1.96-1.3-4.02-1.3-6.2 0-7.17 2.82-14.23 8.47-21.18 5.65-6.95 12.39-10.86 20.21-11.73.22 2.39.33 4.77.33 7.13z" />
    </svg>
  );
}

export function FinderIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="finder-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4bb9ff" />
          <stop offset="100%" stopColor="#0066d6" />
        </linearGradient>
        <linearGradient id="finder-face" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e8f3ff" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#finder-bg)" />
      <rect x="2" y="2" width="96" height="96" rx="20" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
      <path
        d="M26 32 C26 28 32 26 50 26 C68 26 74 28 74 32 L74 68 C74 74 68 76 50 76 C32 76 26 74 26 68 Z"
        fill="url(#finder-face)"
      />
      <circle cx="38" cy="45" r="4.5" fill="#1c3a6b" />
      <circle cx="62" cy="45" r="4.5" fill="#1c3a6b" />
      <path
        d="M49.5 35 L49.5 58 C49.5 61 46 62 44 62"
        stroke="#1c3a6b"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M36 63 C40 70 60 70 64 63"
        stroke="#1c3a6b"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function SafariIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="safari-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dbeafe" />
        </linearGradient>
        <linearGradient id="safari-inner" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="needle-red" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#safari-bg)" />
      <rect x="2" y="2" width="96" height="96" rx="20" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="38" fill="url(#safari-inner)" />
      <circle cx="50" cy="50" r="37" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      {/* Ticks */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <line
          key={deg}
          x1="50"
          y1="16"
          x2="50"
          y2={deg % 90 === 0 ? "20" : "18"}
          stroke="rgba(255,255,255,0.7)"
          strokeWidth={deg % 90 === 0 ? "2" : "1"}
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
      {/* Compass needle */}
      <polygon points="50,18 56,50 50,47 44,50" fill="url(#needle-red)" transform="rotate(45 50 50)" />
      <polygon points="50,82 56,50 50,53 44,50" fill="#f8fafc" transform="rotate(45 50 50)" />
      <circle cx="50" cy="50" r="3" fill="#ffffff" />
    </svg>
  );
}

export function SettingsIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="settings-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="50%" stopColor="#64748b" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#settings-bg)" />
      <rect x="2" y="2" width="96" height="96" rx="20" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="28" fill="#334155" />
      <circle cx="50" cy="50" r="14" fill="#cbd5e1" />
      <circle cx="50" cy="50" r="8" fill="#1e293b" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <rect
          key={deg}
          x="46"
          y="18"
          width="8"
          height="10"
          rx="2"
          fill="#334155"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
    </svg>
  );
}

export function TerminalAppIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="term-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#090d16" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#term-bg)" />
      <rect x="2" y="2" width="96" height="96" rx="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <rect x="8" y="8" width="84" height="16" rx="6" fill="#0f172a" />
      <circle cx="18" cy="16" r="3" fill="#ff5f56" />
      <circle cx="26" cy="16" r="3" fill="#ffbd2e" />
      <circle cx="34" cy="16" r="3" fill="#27c93f" />
      <path
        d="M24 44 L38 54 L24 64"
        stroke="#4ade80"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="44" y1="64" x2="64" y2="64" stroke="#4ade80" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function MessagesIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="msg-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#msg-bg)" />
      <rect x="2" y="2" width="96" height="96" rx="20" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
      <path
        d="M26 48 C26 34 37 25 51 25 C65 25 76 34 76 48 C76 61 65 71 51 71 C46 71 42 70 38 68 L25 73 L28 61 C26.7 57 26 52.7 26 48 Z"
        fill="#ffffff"
      />
    </svg>
  );
}

export function NotesIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="notes-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#facc15" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#notes-bg)" />
      <rect x="2" y="2" width="96" height="96" rx="20" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
      <rect x="0" y="0" width="100" height="24" rx="6" fill="#eab308" />
      <line x1="18" y1="42" x2="82" y2="42" stroke="rgba(161,98,7,0.3)" strokeWidth="2" strokeDasharray="3 3" />
      <line x1="18" y1="58" x2="82" y2="58" stroke="rgba(161,98,7,0.3)" strokeWidth="2" strokeDasharray="3 3" />
      <line x1="18" y1="74" x2="82" y2="74" stroke="rgba(161,98,7,0.3)" strokeWidth="2" strokeDasharray="3 3" />
      <path d="M26 40 L50 40" stroke="#713f12" strokeWidth="3" strokeLinecap="round" />
      <path d="M26 56 L64 56" stroke="#713f12" strokeWidth="3" strokeLinecap="round" />
      <path d="M26 72 L42 72" stroke="#713f12" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function UserMemojiIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="memoji-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#memoji-bg)" />
      <rect x="2" y="2" width="96" height="96" rx="20" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
      <circle cx="50" cy="44" r="18" fill="#fde047" />
      {/* Eyes */}
      <circle cx="43" cy="42" r="2.5" fill="#1e1b4b" />
      <circle cx="57" cy="42" r="2.5" fill="#1e1b4b" />
      {/* Smile */}
      <path d="M44 50 C46 54 54 54 56 50" stroke="#1e1b4b" strokeWidth="2.5" strokeLinecap="round" />
      {/* Body / Shoulders */}
      <path d="M24 82 C24 67 36 64 50 64 C64 64 76 67 76 82" fill="#c7d2fe" />
    </svg>
  );
}

export function GithubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function LinkedinIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32z" />
    </svg>
  );
}

export function TelegramIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.94 4.64a1.5 1.5 0 0 0-1.53-.27L2.8 11.26a1.5 1.5 0 0 0 .13 2.82l4.2 1.19 1.57 4.7a1.5 1.5 0 0 0 2.48.6l2.3-2.27 4.06 2.98a1.5 1.5 0 0 0 2.36-.9l3-14.12a1.5 1.5 0 0 0-.96-1.62zM9.35 14.1l-.55 3.48-1.06-3.17 8.9-5.87-7.29 5.56z" />
    </svg>
  );
}

export function SocialIcon({ id, className }) {
  if (id === 'github') return <GithubIcon className={className} />;
  if (id === 'linkedin') return <LinkedinIcon className={className} />;
  return <TelegramIcon className={className} />;
}
