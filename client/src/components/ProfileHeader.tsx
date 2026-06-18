interface ProfileHeaderProps {
  name: string;
  bio?: string;
  avatar?: string;
}

const FALLBACK_AVATAR = "https://ui-avatars.com/api/?name=Ohana+Lifestyle&background=2D5016&color=fff&size=160";

function IconInstagram() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ig-bg" cx="30%" cy="107%" r="130%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="10%" stopColor="#fdf497" />
          <stop offset="30%" stopColor="#fd5949" />
          <stop offset="52%" stopColor="#d6249f" />
          <stop offset="74%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#ig-bg)" />
      <rect x="8" y="8" width="16" height="16" rx="4.5" stroke="white" strokeWidth="1.8" fill="none" />
      <circle cx="16" cy="16" r="4" stroke="white" strokeWidth="1.8" fill="none" />
      <circle cx="21.2" cy="10.8" r="1.1" fill="white" />
    </svg>
  );
}

function IconPinterest() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#E60023" />
      <path
        d="M16 7C11.03 7 7 11.03 7 16c0 3.73 2.22 6.95 5.42 8.44-.07-.66-.14-1.68.03-2.4.15-.66 1.01-4.27 1.01-4.27s-.26-.51-.26-1.27c0-1.19.69-2.08 1.55-2.08.73 0 1.09.55 1.09 1.21 0 .74-.47 1.85-.71 2.88-.2.86.42 1.56 1.26 1.56 1.51 0 2.67-1.59 2.67-3.89 0-2.03-1.46-3.45-3.55-3.45-2.42 0-3.84 1.81-3.84 3.69 0 .73.28 1.51.63 1.94.07.08.08.16.06.24-.13.54-.42 1.7-.48 1.94-.08.31-.26.38-.6.23-1.49-.69-2.42-2.88-2.42-4.63 0-3.77 2.74-7.23 7.9-7.23 4.14 0 7.36 2.95 7.36 6.89 0 4.11-2.59 7.42-6.18 7.42-1.21 0-2.34-.63-2.73-1.37l-.74 2.77c-.27 1.04-.99 2.33-1.47 3.12 1.11.34 2.28.53 3.5.53 4.97 0 9-4.03 9-9s-4.03-9-9-9z"
        fill="white"
      />
    </svg>
  );
}

function IconShopee() {
  return (
    <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="14" fill="#EE4D2D" />
      <path
        d="M32 10C26.48 10 22 14.48 22 20H26C26 16.69 28.69 14 32 14C35.31 14 38 16.69 38 20H42C42 14.48 37.52 10 32 10Z"
        fill="white"
      />
      <path
        d="M18 22L20.5 50H43.5L46 22H18Z"
        fill="white" fillOpacity="0.95"
      />
      <text x="32" y="41" textAnchor="middle" dominantBaseline="middle" fontSize="18" fontWeight="bold" fontFamily="Arial, sans-serif" fill="#EE4D2D">S</text>
    </svg>
  );
}

function IconShein() {
  return (
    <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="14" fill="#000000" />
      <text x="32" y="36" textAnchor="middle" dominantBaseline="middle" fontSize="36" fontWeight="bold" fontFamily="Arial, sans-serif" fill="white">S</text>
    </svg>
  );
}

function IconMercadoLivre() {
  return (
    <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="14" fill="#FFE600" />
      <ellipse cx="32" cy="34" rx="20" ry="13" fill="#3D2D8F" />
      <ellipse cx="32" cy="34" rx="18" ry="11" fill="#FFE600" />
      <path d="M22 34C22 34 25 29 32 29C39 29 42 34 42 34C42 34 39 39 32 39C25 39 22 34 22 34Z" fill="#FFE600" />
      <path
        d="M24 33C25.5 30.5 28.5 28.5 32 28.5C35.5 28.5 38.5 30.5 40 33"
        stroke="#3D2D8F" strokeWidth="1.5" fill="none"
      />
      <path
        d="M24 35C25.5 37.5 28.5 39.5 32 39.5C35.5 39.5 38.5 37.5 40 35"
        stroke="#3D2D8F" strokeWidth="1.5" fill="none"
      />
      <path d="M26 31.5C28 30 30 29.5 32 29.5L32 38.5C30 38.5 28 38 26 36.5C25 35.5 24.5 34.5 24.5 34C24.5 33 25 32 26 31.5Z" fill="white" fillOpacity="0.9"/>
      <path d="M38 31.5C36 30 34 29.5 32 29.5L32 38.5C34 38.5 36 38 38 36.5C39 35.5 39.5 34.5 39.5 34C39.5 33 39 32 38 31.5Z" fill="white" fillOpacity="0.7"/>
      <ellipse cx="32" cy="34" rx="19" ry="12" stroke="#3D2D8F" strokeWidth="2" fill="none" />
    </svg>
  );
}

export default function ProfileHeader({ name, bio, avatar }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center pt-10 pb-6 px-4">
      <img
        src={avatar || FALLBACK_AVATAR}
        alt={name}
        width={132}
        height={132}
        className="rounded-full object-cover shadow-lg md:w-40 md:h-40"
        style={{ border: "3px solid #2D5016" }}
        onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_AVATAR; }}
      />

      {/* Nome + Instagram + Pinterest na mesma linha */}
      <div className="flex items-center gap-3 mt-4">
        <a
          href="https://www.instagram.com/0hanalifestyle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="transition-transform hover:scale-110 active:scale-95"
        >
          <IconInstagram />
        </a>

        <h1 className="text-2xl md:text-3xl font-bold" style={{ color: "#2D5016" }}>
          {name}
        </h1>

        <a
          href="https://pin.it/1myNDvy5t"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pinterest"
          className="transition-transform hover:scale-110 active:scale-95"
        >
          <IconPinterest />
        </a>
      </div>

      {/* Bio */}
      {bio && (
        <p className="mt-3 text-center text-sm md:text-base max-w-xs" style={{ color: "#4a6b3a" }}>
          {bio}
        </p>
      )}

      {/* Icones das lojas */}
      <div className="flex items-center gap-4 mt-4">
        <IconShopee />
        <IconShein />
        <IconMercadoLivre />
      </div>
    </div>
  );
}