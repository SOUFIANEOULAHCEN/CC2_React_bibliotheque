import { createContext, useState, useContext } from 'react';

const EmpruntContext = createContext();

export const useEmprunt = () => useContext(EmpruntContext);

export const EmpruntProvider = ({ children }) => {
  const [emprunts, setEmprunts] = useState([]);

  const empruntLivre = (livre) => {
    if (!emprunts.find(l => l.id === livre.id)) {
      setEmprunts([...emprunts, livre]);
    }
  };

  const returnLivre = (id) => {
    setEmprunts(emprunts.filter(livre => livre.id !== id));
  };

  return (
    <EmpruntContext.Provider value={{ emprunts, empruntLivre, returnLivre }}>
      {children}
    </EmpruntContext.Provider>
  );
};
