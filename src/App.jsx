
import { EmpruntProvider } from './context/EmpruntContext';
import ListLivre from './components/ListLivre';
import LivresEmpruntes from './components/LivresEmpruntes';

function App() {
  return (
    <EmpruntProvider>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <div className="w-full p-6 border border-gray-300 rounded-md shadow-md">
          <h1 className="text-5xl font-semibold text-center text-gray-50 py-4 rounded-lg bg-gray-900 mb-6">Bibliothèque</h1>
          <div className="grid grid-cols-1 gap-6">
            <ListLivre />
            <LivresEmpruntes />
          </div>
        </div>
      </div>
    </EmpruntProvider>
  );
}

export default App;