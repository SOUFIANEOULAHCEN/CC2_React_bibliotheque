import { useState, useEffect } from "react";
import { useEmprunt } from "../context/EmpruntContext";
import Message from "./Message";
import fetchLivres from "../services/api";

function ListLivre() {
  const [livres, setLivres] = useState([]);
  const [message, setMessage] = useState("");
  const { empruntLivre, emprunts } = useEmprunt();

  useEffect(() => {
    const getLivres = async () => {
      const data = await fetchLivres();
      const booksWithAvailability = data.map((book) => ({
        ...book,
        available: Math.random() < 0.7, 
      }));
      setLivres(booksWithAvailability);
    };

    getLivres();
  }, []);

  const handleEmprunt = (livre) => {
    if (livre.available && !emprunts.find((l) => l.id === livre.id)) {
      empruntLivre(livre);
      setMessage(`Le livre "${livre.titre}" a été emprunté avec succès.`);
    } else {
      setMessage(
        `Le livre "${livre.titre}" n'est pas disponible pour l'emprunt.`
      );
    }
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Liste des Livres
      </h2>
      {message && <Message text={message} />}
      <ul className="space-y-3 grid grid-cols-2 gap-4">
        {livres.map((livre) => (
          <li key={livre.id} className="border border-gray-300 rounded-md p-4">
            <h3 className="text-lg font-medium text-gray-900">{livre.titre}</h3>
            <p className="text-sm text-gray-700">par {livre.auteur}</p>
            <p className="text-sm text-gray-600 mt-1">
              Disponibilité:{" "}
              {livre.available && !emprunts.find((l) => l.id === livre.id)
                ? "Disponible"
                : "Non disponible"}
            </p>
            {livre.available && !emprunts.find((l) => l.id === livre.id) && (
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
