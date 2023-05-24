import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import MiNavBar from './components/MiNavBar';





function App() {
  return (
    <div className="App">
  <MiNavBar />
  <ItemListContainer greeting="Bienvenidxs a la tienda de Dolce Vita"/>
    </div>
  );
}

export default App;
