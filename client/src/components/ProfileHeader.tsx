import instagramIcon from "@/assets/instagram.png";
import pinterestIcon from "@/assets/pinterest.png";

interface ProfileHeaderProps {
  name: string;
  bio?: string;
  avatar?: string;
}

const FALLBACK_AVATAR =
  "https://ui-avatars.com/api/?name=Ohana+Lifestyle&background=2D5016&color=fff&size=160";

function IconShopee() {
  return (
    <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="14" fill="#EE4D2D" />
      <path d="M22 26C22 19.37 26.48 14 32 14C37.52 14 42 19.37 42 26" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" />
      <rect x="14" y="26" width="36" height="26" rx="5" fill="white" />
      <text x="32" y="44" textAnchor="middle" dominantBaseline="middle" fontSize="20" fontWeight="900" fontFamily="Arial Black, Arial, sans-serif" fill="#EE4D2D">S</text>
    </svg>
  );
}

function IconShein() {
  return (
    <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="14" fill="#000000" />
      <text x="32" y="38" textAnchor="middle" dominantBaseline="middle" fontSize="40" fontWeight="900" fontFamily="Arial Black, Arial, sans-serif" fill="white">S</text>
    </svg>
  );
}

function IconMercadoLivre() {
  return (
    <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="14" fill="#FFE600" />
      <ellipse cx="32" cy="36" rx="22" ry="14" fill="#2968C8" />
      <ellipse cx="32" cy="36" rx="19" ry="11" fill="white" />
      <path d="M18 36 C20 32, 25 30, 30 33 L30 39 C25 42, 20 40, 18 36Z" fill="#2968C8" />
      <path d="M46 36 C44 32, 39 30, 34 33 L34 39 C39 42, 44 40, 46 36Z" fill="#2968C8" />
      <ellipse cx="32" cy="36" rx="3" ry="4" fill="white" />
    </svg>
  );
}

export default function ProfileHeader({ name, bio, avatar }: ProfileHeaderProps) {
  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "#CFE0BC",
        borderBottom: "2px solid #b8d4a5",
        boxShadow: "0 2px 8px rgba(45,80,22,0.10)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
        {/* Logo */}
        <img
          src={avatar || FALLBACK_AVATAR}
          alt={name}
          width={52}
          height={52}
          className="rounded-full object-cover flex-shrink-0"
          style={{ border: "2px solid #2D5016", width: 52, height: 52 }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = FALLBACK_AVATAR;
          }}
        />

        {/* Nome + Subtítulo */}
        <div className="flex-1 min-w-0">
          <h1 className="text-lg font-bold leading-tight" style={{ color: "#2D5016" }}>
            {name}
          </h1>
          {bio && (
            <p className="text-xs leading-tight truncate" style={{ color: "#4a6b3a" }}>
              {bio}
            </p>
          )}
        </div>

        {/* Ícones sociais */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href="https://www.instagram.com/0hanalifestyle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-transform hover:scale-110 active:scale-95"
          >
            <img src={instagramIcon} alt="Instagram" width={32} height={32} className="rounded-lg" />
          </a>
          <a
            href="https://pin.it/1myNDvy5t"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
            className="transition-transform hover:scale-110 active:scale-95"
          >
            <img src={pinterestIcon} alt="Pinterest" width={32} height={32} className="rounded-lg" />
          </a>
        </div>
      </div>

      {/* Loja parceira */}
      <div
        className="flex items-center justify-center pb-2"
        style={{ borderTop: "1px solid #b8d4a5" }}
      >
        <IconShopee />
      </div>
    </header>
  );
}
