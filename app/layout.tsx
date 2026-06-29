import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cap Serein 83 | Conciergerie à La Seyne-sur-Mer",
  description:
    "Accueil voyageurs, constats d'entrée et de sortie, remise de clés et coordination du ménage pour locations saisonnières à La Seyne-sur-Mer.",
  metadataBase: new URL("https://conciergerie.mdmultiservices83.fr"),
  openGraph: {
    title: "Cap Serein 83",
    description: "Votre relais local pour chaque arrivée, départ et contrôle de logement.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
