import { Link } from "wouter";
import ProfileHeader from "@/components/ProfileHeader";

interface InstagramPost {
  id: string;
  code: string;
  title: string;
}

export default function Home() {
  const profileData = {
    name: "Ohana Lifestyle",
    bio: "Curadoria de Looks",
    avatar:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663653761940/RAxCranEznkybURV.png",
  };

  const affiliateLink =
    "https://collshp.com/n/lauraohanalifestyle?view=storefront&utm_source=ig&utm_medium=social&utm_content=link_in_bio";

  const instagramPosts: InstagramPost[] = [
    { id: "1",  code: "DZYZF0NAZE2",  title: "Vestido + Scarpin" },
    { id: "2",  code: "DZYH3_WH7oq",  title: "Look Dia dos Namorados" },
    { id: "3",  code: "DZXv3cZDVAP",  title: "Conjunto Alfaiataria" },
    { id: "4",  code: "DZXbTF7CD6e",  title: "Vestido Polo Brasil" },
    { id: "5",  code: "DZVLEewDbjC",  title: "Novo Look Fitness" },
    { id: "6",  code: "DZU2dYfjKbk",  title: "Camisa do Brasil" },
    { id: "7",  code: "DZTBtqhATQC",  title: "Vestido de Tricô" },
    { id: "8",  code: "DZS0FgiAQ-w",  title: "Blazer Verde + Calça Legging" },
    { id: "9",  code: "DZSmSY2gX9D",  title: "Calça Flare" },
    { id: "10", code: "DZSRq3VCBgS",  title: "Vestido Midi Chiffon" },
    { id: "11", code: "DZOF5gCjDJn",  title: "Calça Pantalona Cargo" },
    { id: "12", code: "DZN4J70DYuF",  title: "Conjunto Fitness" },
    { id: "13", code: "DZNqevtjaTW",  title: "Look Dia dos Namorados" },
    { id: "14", code: "DZNctH6DZC5",  title: "Moletom Brasil Copa" },
    { id: "15", code: "DZNMKYeEWu8",  title: "Conjunto Inverno" },
    { id: "16", code: "DZsxq4bks9w",  title: "Vestido de Tricot Longo" },
    { id: "17", code: "DZqM6ipEZ9",   title: "Camisa Social Verde" },
    { id: "18", code: "DZpc0oGlCFi",  title: "Camisa Branca + Saia Midi" },
    { id: "19", code: "DZnu-LAgcGY",  title: "Saia Preta + Blusa de Tricot" },
    { id: "20", code: "DZnaXlwjZzq",  title: "Blazer Longo + Pantalona" },
    { id: "21", code: "DZnMsomiXCJ",  title: "Vestido Boneca" },
    { id: "22", code: "DZm4EVwHXM0",  title: "Calça Cargo Pantalona" },
    { id: "23", code: "DZfeUJsCODu",  title: "Calça Pantalona Alfaiataria" },
    { id: "24", code: "DZfJrLEHX7_",  title: "Jaqueta de Couro + Legging" },
    { id: "25", code: "DZdU6nil3HY",  title: "Macacão Inverno" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#CFE0BC" }}>
      <ProfileHeader
        name={profileData.name}
        bio={profileData.bio}
        avatar={profileData.avatar}
      />

      <div className="max-w-4xl mx-auto px-4 pb-16">
        <h2
          className="text-center font-display font-bold mb-2"
          style={{ color: "#2D5016", fontSize: "10px" }}
        >
          Encontre o seu Look Perfeito
        </h2>
        <p className="text-center mb-8" style={{ color: "#4a6b3a", fontSize: "8px" }}>
          Clique no Look que <strong>amou</strong> e veja <strong>cada peça</strong> disponível
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {instagramPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/look/${post.code}`}
              className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                animationDelay: `${index * 60}ms`,
                animationFillMode: "both",
                backgroundColor: "#ffffff",
              }}
            >
              <div className="relative w-full" style={{ paddingBottom: "125%" }}>
                <iframe
                  src={`https://www.instagram.com/p/${post.code}/embed/captioned/?cr=1&v=14&wp=540`}
                  className="absolute inset-0 w-full h-full border-0"
                  scrolling="no"
                  allowTransparency={true}
                  title={post.title}
                  loading="lazy"
                />
                <div className="absolute inset-0 z-10 bg-transparent group-hover:bg-black/10 transition-colors duration-200" />
              </div>

              <div
                className="p-3 flex items-center justify-between"
                style={{ backgroundColor: "#2D5016" }}
              >
                <span className="text-sm font-semibold text-white truncate">
                  {post.title}
                </span>
                <span className="text-xs text-white/80 whitespace-nowrap ml-2">
                  Ver Peças →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div
        className="text-center py-8 border-t"
        style={{ borderColor: "#b8d4a5" }}
      >
        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 shadow-md"
          style={{ backgroundColor: "#2D5016" }}
        >
          Visite Nossa Vitrine Completa na Shopee
        </a>
        <p className="mt-4 text-sm" style={{ color: "#4a6b3a" }}>
          Todos os produtos estão disponíveis em nossa vitrine de afiliado
        </p>
      </div>
    </div>
  );
}