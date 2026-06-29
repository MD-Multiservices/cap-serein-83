export default function MentionsLegales() {
  return (
    <main className="legalPage">
      <div className="container legalContent">
        <a href="/" className="backLink">← Retour au site</a>
        <p className="eyebrow dark">Informations légales</p>
        <h1>Mentions légales</h1>

        <h2>Éditeur du site</h2>
        <p>
          Mehdi Derghal EI - Entrepreneur individuel<br />
          Noms commerciaux : Cap Serein 83 et MD Multiservices 83<br />
          SIREN : 104 499 900<br />
          SIRET : 104 499 900 00017<br />
          Adresse : 21 avenue Julien Belfort, 83500 La Seyne-sur-Mer<br />
          Téléphone : 07 68 09 21 53<br />
          E-mail : mehdi.derghal@gmail.com
        </p>

        <h2>Hébergement</h2>
        <p>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>

        <h2>Nature des prestations</h2>
        <p>Cap Serein 83 réalise des prestations matérielles d'intendance : accueil, remise de clés, contrôles visuels, constats photographiques, suivi d'interventions et coordination de prestataires. L'activité n'inclut pas l'encaissement de loyers ou dépôts de garantie, la négociation ou la signature de contrats de location pour le compte d'autrui.</p>

        <h2>Médiation de la consommation</h2>
        <div className="legalAlert">
          À compléter avant la première prestation vendue à un client consommateur : nom, adresse et site internet du médiateur choisi après signature de la convention.
        </div>

        <h2>Données personnelles</h2>
        <p>Les informations communiquées par téléphone, WhatsApp ou e-mail sont utilisées uniquement pour répondre aux demandes, préparer les devis et exécuter les prestations. Elles ne sont pas vendues. Vous pouvez demander leur rectification ou leur suppression à l'adresse indiquée ci-dessus.</p>
      </div>
    </main>
  );
}
