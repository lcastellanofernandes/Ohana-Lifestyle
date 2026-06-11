interface ProfileHeaderProps {
  name: string;
  bio?: string;
  avatar?: string;
}

/**
 * ProfileHeader Component - Ohana Lifestyle
 * Design: Logo circular com fundo verde, tipografia elegante
 * O logo é exibido exatamente como fornecido pelo usuário
 */
export default function ProfileHeader({
  name,
  bio,
  avatar,
}: ProfileHeaderProps) {
  return (
    <div className="text-center py-12 md:py-16">
      {/* Avatar/Logo - exibido em círculo exatamente como fornecido */}
      <div className="mb-6 flex justify-center">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border-4" style={{ borderColor: '#2D5016' }}>
          <img
            src={avatar || 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663653761940/RAxCranEznkybURV.png'}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name and Bio */}
      <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#2D5016' }}>
        {name}
      </h1>
      {bio && (
        <p className="text-lg max-w-md mx-auto px-4" style={{ color: '#4a6b3a' }}>
          {bio}
        </p>
      )}
    </div>
  );
}
