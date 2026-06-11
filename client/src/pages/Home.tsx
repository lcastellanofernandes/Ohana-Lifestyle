import ProfileHeader from '@/components/ProfileHeader';

/**
 * Home Page - Ohana Lifestyle Linktree
 * Design: Minimalismo Elegante com Verde e Dourado
 * Layout: Perfil centralizado + feed de publicações do Instagram como cards
 * Background: Verde suave #CFE0BC
 * Cores: Verde floresta (#2D5016), Dourado (#D4AF37)
 */

interface InstagramPost {
  id: string;
  code: string;
  title: string;
  instagramUrl: string;
  shopeeUrl: string;
}

export default function Home() {
  // Dados do perfil
  const profileData = {
    name: 'Ohana Lifestyle',
    bio: 'Moda Feminina | Curadoria de looks que valorizam todo tipo de corpo',
    avatar: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663653761940/RAxCranEznkybURV.png',
  };

  // Link da vitrine de afiliado Shopee
  const affiliateLink = 'https://collshp.com/n/lauraohanalifestyle?view=storefront&utm_source=ig&utm_medium=social&utm_content=link_in_bio';

  // Publicações reais do Instagram @0hanalifestyle
  const instagramPosts: InstagramPost[] = [
    {
      id: '1',
      code: 'DZYZF0NAZE2',
      title: 'Vestido + Scarpin',
      instagramUrl: 'https://www.instagram.com/p/DZYZF0NAZE2/',
      shopeeUrl: affiliateLink,
    },
    {
      id: '2',
      code: 'DZYH3_WH7oq',
      title: 'Look Dia dos Namorados',
      instagramUrl: 'https://www.instagram.com/p/DZYH3_WH7oq/',
      shopeeUrl: affiliateLink,
    },
    {
      id: '3',
      code: 'DZXv3cZDVAP',
      title: 'Conjunto Alfaiataria',
      instagramUrl: 'https://www.instagram.com/p/DZXv3cZDVAP/',
      shopeeUrl: affiliateLink,
    },
    {
      id: '4',
      code: 'DZXbTF7CD6e',
      title: 'Vestido Polo Brasil',
      instagramUrl: 'https://www.instagram.com/p/DZXbTF7CD6e/',
      shopeeUrl: affiliateLink,
    },
    {
      id: '5',
      code: 'DZVLEewDbjC',
      title: 'Novo Look Fitness',
      instagramUrl: 'https://www.instagram.com/p/DZVLEewDbjC/',
      shopeeUrl: affiliateLink,
    },
    {
      id: '6',
      code: 'DZU2dYfjKbk',
      title: 'Camisa do Brasil',
      instagramUrl: 'https://www.instagram.com/p/DZU2dYfjKbk/',
      shopeeUrl: affiliateLink,
    },
    {
      id: '7',
      code: 'DZTBtqhATQC',
      title: 'Vestido de Tricô',
      instagramUrl: 'https://www.instagram.com/p/DZTBtqhATQC/',
      shopeeUrl: affiliateLink,
    },
    {
      id: '8',
      code: 'DZS0FgiAQ-w',
      title: 'Blazer Verde + Calça Legging',
      instagramUrl: 'https://www.instagram.com/p/DZS0FgiAQ-w/',
      shopeeUrl: affiliateLink,
    },
    {
      id: '9',
      code: 'DZSmSY2gX9D',
      title: 'Calça Flare',
      instagramUrl: 'https://www.instagram.com/p/DZSmSY2gX9D/',
      shopeeUrl: affiliateLink,
    },
    {
      id: '10',
      code: 'DZSRq3VCBgS',
      title: 'Vestido Midi Chiffon',
      instagramUrl: 'https://www.instagram.com/p/DZSRq3VCBgS/',
      shopeeUrl: affiliateLink,
    },
    {
      id: '11',
      code: 'DZOF5gCjDJn',
      title: 'Calça Pantalona Cargo',
      instagramUrl: 'https://www.instagram.com/p/DZOF5gCjDJn/',
      shopeeUrl: affiliateLink,
    },
    {
      id: '12',
      code: 'DZN4J70DYuF',
      title: 'Conjunto Fitness',
      instagramUrl: 'https://www.instagram.com/p/DZN4J70DYuF/',
      shopeeUrl: affiliateLink,
    },
    {
      id: '13',
      code: 'DZNqevtjaTW',
      title: 'Look Dia dos Namorados',
      instagramUrl: 'https://www.instagram.com/p/DZNqevtjaTW/',
      shopeeUrl: affiliateLink,
    },
    {
      id: '14',
      code: 'DZNctH6DZC5',
      title: 'Moletom Brasil Copa',
      instagramUrl: 'https://www.instagram.com/p/DZNctH6DZC5/',
      shopeeUrl: affiliateLink,
    },
    {
      id: '15',
      code: 'DZNMKYeEWu8',
      title: 'Conjunto Inverno',
      instagramUrl: 'https://www.instagram.com/p/DZNMKYeEWu8/',
      shopeeUrl: affiliateLink,
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#CFE0BC' }}>
      {/* Profile Section */}
      <ProfileHeader
        name={profileData.name}
        bio={profileData.bio}
        avatar={profileData.avatar}
      />

      {/* Instagram Feed Section */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-center font-display text-2xl md:text-3xl font-bold mb-2" style={{ color: '#2D5016' }}>
          Encontre o seu Look Perfeito
        </h2>
        <p className="text-center mb-8" style={{ color: '#4a6b3a' }}>
          Clique no Look que amou e reserve ele em nossa vitrine
        </p>

        {/* Grid de Publicações - Instagram Embeds */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {instagramPosts.map((post, index) => (
            <a
              key={post.id}
              href={post.shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                animationDelay: `${index * 60}ms`,
                animationFillMode: 'both',
                backgroundColor: '#ffffff',
              }}
            >
              {/* Instagram Embed via iframe */}
              <div className="relative w-full" style={{ paddingBottom: '125%' }}>
                <iframe
                  src={`https://www.instagram.com/p/${post.code}/embed/captioned/?cr=1&v=14&wp=540`}
                  className="absolute inset-0 w-full h-full border-0"
                  scrolling="no"
                  allowTransparency={true}
                  title={post.title}
                  loading="lazy"
                />
                {/* Overlay clicável para redirecionar para Shopee */}
                <div className="absolute inset-0 z-10 bg-transparent group-hover:bg-black/10 transition-colors duration-200" />
              </div>

              {/* Card Footer com título e CTA */}
              <div className="p-3 flex items-center justify-between" style={{ backgroundColor: '#2D5016' }}>
                <span className="text-sm font-semibold text-white truncate">
                  {post.title}
                </span>
                <span className="text-xs text-white/80 whitespace-nowrap ml-2">
                  Ver na Shopee →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-8 border-t" style={{ borderColor: '#b8d4a5' }}>
        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-98 shadow-md"
          style={{ backgroundColor: '#2D5016' }}
        >
          Visite Nossa Vitrine Completa na Shopee
        </a>
        <p className="mt-4 text-sm" style={{ color: '#4a6b3a' }}>
          Todos os produtos estão disponíveis em nossa vitrine de afiliado
        </p>
      </div>
    </div>
  );
}
