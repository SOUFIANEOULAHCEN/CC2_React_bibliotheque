import { useEmprunt } from '../context/EmpruntContext';

function LivresEmpruntes() {
  const { emprunts, returnLivre } = useEmprunt();

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Livres Empruntés</h2>
      {emprunts.length === 0 ? (
        <p className="text-gray-700">Aucun livre emprunté pour le moment.</p>
      ) : (
        <ul className="space-y-3 border border-gray-300 rounded-md p-4 bg-gray-200">
          {emprunts.map((livre) => (
            <li key={livre.id} className="border border-gray-300 rounded-md p-4 bg-gray-50 ">
              <h3 className="text-lg font-medium text-gray-900">{livre.titre}</h3>
              <p className="text-sm text-gray-700">par {livre.auteur}</p>
              <p className="text-sm text-gray-600 mt-1">Disponibilité: Emprunté</p>
              <button
                onClick={() => returnLivre(livre.id)}
                className="mt-2 bg-gray-900 text-white px-3 py-1 rounded-md hover:bg-gray-700 transition"
              >
                Rendre
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LivresEmpruntes;
