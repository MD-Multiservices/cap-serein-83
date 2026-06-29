const phoneDisplay = "07 68 09 21 53";
const phoneHref = "+33768092153";
const whatsappText = encodeURIComponent(
  "Bonjour, je souhaite obtenir des informations sur les services Cap Serein 83 pour un logement situé à :"
);

const prices = [
  ["Accueil voyageurs + remise des clés", "39 €"],
  ["Départ + contrôle simple du logement", "39 €"],
  ["Pack accueil + départ", "72 €"],
  ["Constat photo studio / T1 - entrée ou sortie", "59 €"],
  ["Constat photo T2 - entrée ou sortie", "69 €"],
  ["Constat photo T3 - entrée ou sortie", "84 €"],
  ["Constat photo T4 / maison jusqu'à 100 m²", "109 €"],
  ["Visite de vigilance hors location", "35 €"],
  ["Intervention imprévue en journée", "à partir de 45 €"],
];

const partnerPrices = [
  ["Ménage studio / T1", "45 à 55 €"],
  ["Ménage T2", "55 à 70 €"],
  ["Ménage T3", "75 à 95 €"],
  ["Ménage T4 / maison", "100 à 150 €"],
  ["Kit linge lit simple", "14 à 18 €"],
  ["Kit linge lit double", "18 à 22 €"],
  ["Kit serviettes par personne", "8 à 10 €"],
];

function Logo() {
  return (
    <span className="brand" aria-label="Cap Serein 83">
      <span className="brandMark" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img">
          <path d="M12 31 32 14l20 17v20H12Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
          <path d="M23 51V35h18v16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
          <path d="M20 43c7-5 17-5 24 0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <circle cx="32" cy="34" r="3" fill="currentColor" />
        </svg>
      </span>
      <span><strong>Cap Serein</strong><small>83</small></span>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header className="navWrap">
        <nav className="nav container" aria-label="Navigation principale">
          <a href="#accueil" className="logoLink"><Logo /></a>
          <div className="navLinks">
            <a href="#services">Services</a>
            <a href="#tarifs">Tarifs</a>
            <a href="#zone">Secteur</a>
          </div>
          <a className="button buttonSmall" href={`tel:${phoneHref}`}>Appeler</a>
        </nav>
      </header>

      <section className="hero" id="accueil">
        <div className="heroGlow one" />
        <div className="heroGlow two" />
        <div className="container heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Conciergerie de proximité • La Seyne-sur-Mer</p>
            <h1>Votre logement suivi avec méthode, même quand vous êtes loin.</h1>
            <p className="lead">
              Accueil des voyageurs, remise des clés, constats d'entrée et de sortie avec photos,
              contrôle du logement et coordination des prestations de ménage et de linge.
            </p>
            <div className="actions">
              <a className="button" href={`tel:${phoneHref}`}>Parler de votre logement</a>
              <a className="button buttonGhost" href={`https://wa.me/${phoneHref.replace("+", "")}?text=${whatsappText}`}>Écrire sur WhatsApp</a>
            </div>
            <div className="trustRow">
              <span>Interlocuteur local</span><span>Compte rendu photo</span><span>Tarifs au forfait</span>
            </div>
          </div>
          <aside className="heroCard" aria-label="Engagements">
            <p className="cardLabel">Un relais local fiable</p>
            <h2>Chaque passage laisse une trace claire.</h2>
            <ul>
              <li>Photos et observations utiles</li>
              <li>Signalement rapide des anomalies</li>
              <li>Prestataires ménage et linge identifiés</li>
              <li>Suivi distinct des besoins techniques</li>
            </ul>
            <div className="miniContact"><span>Contact direct</span><strong>{phoneDisplay}</strong></div>
          </aside>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <p className="eyebrow dark">Des prestations concrètes</p>
          <div className="sectionHead">
            <h2>Vous choisissez uniquement ce dont votre logement a besoin.</h2>
            <p>Une offre simple, sans abonnement imposé et sans pourcentage prélevé sur les loyers.</p>
          </div>
          <div className="serviceGrid">
            <article><span>01</span><h3>Accueil & clés</h3><p>Accueil sur place, présentation du logement, consignes essentielles et remise des clés.</p></article>
            <article><span>02</span><h3>Constat d'entrée</h3><p>Vérification visuelle, inventaire ciblé, photos et signalement immédiat des points sensibles.</p></article>
            <article><span>03</span><h3>Contrôle de sortie</h3><p>Récupération des clés, contrôle général, comparaison avec les éléments fournis et compte rendu.</p></article>
            <article><span>04</span><h3>Ménage coordonné</h3><p>Organisation avec un partenaire indépendant. Le devis est validé avant la mise en place.</p></article>
            <article><span>05</span><h3>Linge sous-traité</h3><p>Location ou blanchisserie via un prestataire local, avec des tarifs séparés et traçables.</p></article>
            <article><span>06</span><h3>Suivi des anomalies</h3><p>Signalement, photos et coordination d'une intervention technique sur devis séparé.</p></article>
          </div>
        </div>
      </section>

      <section className="section pricingSection" id="tarifs">
        <div className="container pricingGrid">
          <div>
            <p className="eyebrow">Grille de lancement</p>
            <h2>Des prix lisibles avant l'intervention.</h2>
            <p className="muted">Déplacement inclus à La Seyne-sur-Mer. Majoration annoncée avant validation pour les communes voisines, horaires tardifs, dimanches et jours fériés.</p>
            <div className="priceList">
              {prices.map(([label, price]) => <div className="priceRow" key={label}><span>{label}</span><strong>{price}</strong></div>)}
            </div>
          </div>
          <div className="partnerBox">
            <p className="cardLabel">Prestations partenaires - repères</p>
            <h3>Ménage et linge</h3>
            <p>Ces montants sont indicatifs et confirmés après étude du bien. Le prestataire peut facturer directement le propriétaire.</p>
            <div className="partnerList">
              {partnerPrices.map(([label, price]) => <div key={label}><span>{label}</span><strong>{price}</strong></div>)}
            </div>
            <p className="finePrint">Coordination ponctuelle : 12 € par rotation lorsqu'elle n'est pas comprise dans un forfait Cap Serein 83.</p>
          </div>
        </div>
      </section>

      <section className="section" id="zone">
        <div className="container zoneGrid">
          <div>
            <p className="eyebrow dark">Secteur d'intervention</p>
            <h2>Priorité à la proximité et à la réactivité.</h2>
            <p>La Seyne-sur-Mer, Les Sablettes, Tamaris et Mar Vivo en priorité. Six-Fours-les-Plages, Saint-Mandrier-sur-Mer, Ollioules et Toulon selon disponibilité.</p>
          </div>
          <div className="zoneMap" aria-label="Zone La Seyne-sur-Mer et communes voisines">
            <span className="dot mainDot" /><span className="label mainLabel">La Seyne-sur-Mer</span>
            <span className="dot d2" /><span className="label l2">Six-Fours</span>
            <span className="dot d3" /><span className="label l3">Saint-Mandrier</span>
            <span className="dot d4" /><span className="label l4">Toulon</span>
            <span className="coast" />
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <div className="container ctaBox">
          <div><p className="eyebrow">Propriétaires</p><h2>Commençons par une visite du logement.</h2><p>Elle permet de cadrer les accès, l'inventaire, les rotations et le niveau de contrôle attendu.</p></div>
          <div className="actions vertical"><a className="button light" href={`tel:${phoneHref}`}>{phoneDisplay}</a><a className="textLink" href={`https://wa.me/${phoneHref.replace("+", "")}?text=${whatsappText}`}>Envoyer les informations du bien →</a></div>
        </div>
      </section>

      <footer>
        <div className="container footerGrid">
          <div><Logo /><p>Conciergerie et intendance locative à La Seyne-sur-Mer.</p></div>
          <div><strong>Cap Serein 83</strong><span>Nom commercial</span><span>SIREN 104 499 900</span></div>
          <div><a href={`tel:${phoneHref}`}>{phoneDisplay}</a><a href={`https://wa.me/${phoneHref.replace("+", "")}?text=${whatsappText}`}>WhatsApp</a><a href="/mentions-legales">Mentions légales</a></div>
        </div>
        <div className="container legalNote">Prestations matérielles d'intendance. Cap Serein 83 n'encaisse ni loyers ni dépôts de garantie et ne signe aucun contrat de location au nom du propriétaire.</div>
      </footer>
    </main>
  );
}
