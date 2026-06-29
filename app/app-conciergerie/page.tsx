export default function AppConciergeriePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <section className="mx-auto max-w-6xl">
        <div className="rounded-3xl bg-white p-6 shadow-sm md:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Cap Serein — logiciel interne
          </p>

          <h1 className="mt-3 text-3xl font-bold md:text-5xl">
            Tableau de bord conciergerie
          </h1>

          <p className="mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
            Gérez les logements, les remises de clés, les états des lieux, les
            photos, le linge, le ménage et les interventions à prévoir.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/app-conciergerie/etat-des-lieux/nouveau"
              className="rounded-full bg-blue-700 px-6 py-3 text-center font-semibold text-white shadow hover:bg-blue-800"
            >
              Nouvel état des lieux
            </a>

            <a
              href="/app-conciergerie/logements"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-900 hover:bg-slate-100"
            >
              Gérer les logements
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <DashboardCard
            title="Logements"
            text="Créer vos biens, ajouter l’adresse, les accès, les infos utiles et les consignes."
          />

          <DashboardCard
            title="États des lieux"
            text="Entrant, sortant, photos par pièce, remarques, compteurs et clés."
          />

          <DashboardCard
            title="Ménage & linge"
            text="Préparer les missions pour le ménage, le pressing et les sous-traitants."
          />
        </div>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Prochaine étape</h2>

          <p className="mt-2 text-slate-600">
            On va ajouter le formulaire complet d’état des lieux avec les
            pièces, les photos, les compteurs, les clés et la signature.
          </p>
        </div>
      </section>
    </main>
  );
}

function DashboardCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}