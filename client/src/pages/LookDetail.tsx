import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import ProfileHeader from "@/components/ProfileHeader";

const SHEETS_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQThHK7CixokEZWZYc-BVtzoz3yqfz9COeI3A90OzzFXwgEr-x1OoCd3_zCEmiIZH7J3veiRK9G4vit/pub?output=csv";

interface LookItem {
  item_nome: string;
  item_link: string;
}

export default function LookDetail() {
  const { code } = useParams<{ code: string }>();
  const [items, setItems] = useState<LookItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(SHEETS_CSV_URL)
      .then((r) => r.text())
      .then((csv) => {
        const lines = csv.trim().split("\n").slice(1);
        const filtered = lines
          .map((line) => {
            const parts = line.split(",");
            const instagram_code = parts[0]?.trim();
            const item_nome = parts[1]?.trim();
            const item_link = parts.slice(2).join(",").trim();
            return { instagram_code, item_nome, item_link };
          })
          .filter((row) => row.instagram_code === code)
          .map((row) => ({ item_nome: row.item_nome, item_link: row.item_link }));
        setItems(filtered);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [code]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#CFE0BC" }}>
      <ProfileHeader
        name="Ohana Lifestyle"
        bio="Curadoria de roupas na Shopee"
        avatar="https://files.manuscdn.com/user_upload_by_module/session_file/310519663653761940/RAxCranEznkybURV.png"
      />

      <div className="max-w-5xl mx-auto px-4 pb-16 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-5 text-sm font-semibold hover:underline"
          style={{ color: "#2D5016" }}
        >
          ← Voltar para os looks
        </Link>

        {/* Layout lado a lado */}
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Instagram Embed — largura minima 400px para renderizar corretamente */}
          <div
            className="w-full md:w-auto flex-shrink-0 rounded-2xl overflow-hidden shadow-lg bg-white"
            style={{ width: "100%", maxWidth: "400px" }}
          >
            <iframe
              src={`https://www.instagram.com/p/${code}/embed/?cr=1&v=14&wp=400`}
              width="400"
              height="500"
              className="border-0 block"
              style={{ maxWidth: "100%" }}
              scrolling="no"
              allowTransparency={true}
              title="Post do Instagram"
              loading="lazy"
            />
          </div>

          {/* Links das pecas */}
          <div className="flex-1 w-full">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2D5016" }}>
              Peças do Look
            </h2>

            {loading ? (
              <p style={{ color: "#4a6b3a" }}>Carregando links...</p>
            ) : items.length === 0 ? (
              <p style={{ color: "#4a6b3a" }}>
                Nenhum link disponivel para este look ainda.
              </p>
            ) : (
              <div className="flex flex-col gap-3">
                {items.map((item, i) => (
                  <a
                    key={i}
                    href={item.item_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-5 py-4 rounded-xl shadow-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
                    style={{ backgroundColor: "#2D5016" }}
                  >
                    <span>{item.item_nome}</span>
                    <span className="text-sm text-white/80 whitespace-nowrap ml-4">
                      Comprar →
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}