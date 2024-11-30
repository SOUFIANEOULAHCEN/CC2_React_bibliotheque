
import { useState, useEffect } from 'react';
import { useEmprunt } from '../context/EmpruntContext';
import Message from './Message';

function ListLivre() {
  const [livres, setLivres] = useState([]);
  const [message, setMessage] = useState('');
  const { empruntLivre, emprunts } = useEmprunt();

  useEffect(() => {
    fetch('https://gahi-said.com/apis/auteurs.php')
      .then(response => response.json())
      .then(data => setLivres(data))
      .catch(error => console.error('Erreur:', error));
  }, []);

  const handleEmprunt = (livre) => {
    empruntLivre(livre);
    setMessage(`Le livre "${livre.titre}" a été emprunté avec succès.`);
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liste des Livres</h2>
      {message && <Message text={message} />}
      <ul className="space-y-3 grid grid-cols-2 gap-4">
        {livres.map((livre) => (
          <li key={livre.id} className="border border-gray-300 rounded-md p-4">
            <h3 className="text-lg font-medium text-gray-900">{livre.titre}</h3>
            <p className="text-sm text-gray-700">par {livre.auteur}</p>
            <p className="text-sm text-gray-600 mt-1">
              Disponibilité: {!emprunts.find(l => l.id === livre.id) ? 'Disponible' : 'Emprunté'}
            </p>
            {!emprunts.find(l => l.id === livre.id) && (
              <button
                onClick={() => handleEmprunt(livre)}
                className="mt-2 bg-gray-900 text-white px-3 py-1 rounded-md hover:bg-gray-600 transition"
              >
                Emprunter
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListLivre;
