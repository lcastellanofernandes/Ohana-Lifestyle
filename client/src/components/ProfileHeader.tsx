interface ProfileHeaderProps {
  name: string;
  bio?: string;
  avatar?: string;
}

const FALLBACK_AVATAR = "https://ui-avatars.com/api/?name=Ohana+Lifestyle&background=2D5016&color=fff&size=160";

export default function ProfileHeader({ name, bio, avatar }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center pt-10 pb-6 px-4">
      {/* Avatar */}
      <img
        src={avatar || FALLBACK_AVATAR}
        alt={name}
        width={132}
        height={132}
        className="rounded-full object-cover shadow-lg md:w-40 md:h-40"
        style={{ border: "3px solid #2D5016" }}
        onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_AVATAR; }}
      />

      {/* Nome */}
      <h1 className="mt-4 text-2xl md:text-3xl font-bold" style={{ color: "#2D5016" }}>
        {name}
      </h1>

      {/* Icones Instagram e Pinterest */}
      <div className="flex items-center gap-5 mt-3">
        <a
          href="https://www.instagram.com/0hanalifestyle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="transition-transform hover:scale-110 active:scale-95"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f09433" />
                <stop offset="25%" stopColor="#e6683c" />
                <stop offset="50%" stopColor="#dc2743" />
                <stop offset="75%" stopColor="#cc2366" />
                <stop offset="100%" stopColor="#bc1888" />
              </linearGradient>
            </defs>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="url(#ig-grad)" />
            <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8" fill="none" />
            <circle cx="17" cy="7" r="1.2" fill="white" />
          </svg>
        </a>

        <a
          href="https://pin.it/1myNDvy5t"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pinterest"
          className="transition-transform hover:scale-110 active:scale-95"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#E60023" />
            <path
              d="M12 6C8.69 6 6 8.69 6 12c0 2.49 1.47 4.64 3.6 5.64-.05-.44-.09-1.12.02-1.6.1-.44.67-2.82.67-2.82s-.17-.34-.17-.85c0-.8.46-1.39 1.04-1.39.49 0 .73.37.73.81 0 .49-.31 1.23-.48 1.91-.14.57.28 1.03.84 1.03 1.01 0 1.79-1.06 1.79-2.6 0-1.36-.98-2.31-2.37-2.31-1.62 0-2.57 1.21-2.57 2.46 0 .49.19.1.27.38.03.09.03.17.01.25-.09.36-.28 1.13-.32 1.29-.05.2-.17.24-.38.15-.99-.46-1.61-1.92-1.61-3.09 0-2.51 1.82-4.82 5.26-4.82 2.76 0 4.91 1.97 4.91 4.59 0 2.74-1.73 4.95-4.12 4.95-.81 0-1.56-.42-1.82-.91l-.49 1.85c-.18.69-.66 1.55-.98 2.07.74.23 1.52.35 2.33.35 3.31 0 6-2.69 6-6s-2.69-6-6-6z"
              fill="white"
            />
          </svg>
        </a>
      </div>

      {/* Bio */}
      {bio && (
        <p className="mt-3 text-center text-sm md:text-base max-w-xs" style={{ color: "#4a6b3a" }}>
          {bio}
        </p>
      )}

      {/* Icones de lojas */}
      <div className="flex items-center gap-3 mt-4">
        <span
          className="px-3 py-1 rounded-full text-xs font-bold text-white"
          style={{ backgroundColor: "#EE4D2D" }}
        >
          Shopee
        </span>
        <span
          className="px-3 py-1 rounded-full text-xs font-bold text-white"
          style={{ backgroundColor: "#000000" }}
        >
          Shein
        </span>
        <span
          className="px-3 py-1 rounded-full text-xs font-bold text-white"
          style={{ backgroundColor: "#FFE600", color: "#333" }}
        >
          Mercado Livre
        </span>
      </div>
    </div>
  );
}