import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './router/MainRouter';
import { CartProvider } from './context/CartContext';





function App() {
  return (
    <div className="App">
    <CartProvider>
      <MainRouter />
</CartProvider>
    </div>
  );
}

export default App;
