import './App.css';
import ItemList from "./components/ItemList/ItemList";
import{Navbar} from "./components/Navbar/Navbar";

function App() {
  let saludo = "Hola!! Bienvenido a nuestra tienda"
  return (
    <div className="App">
      <Navbar/>
      <h1>Frizka Bags</h1>
      <ItemList saludo={saludo}/>
     
    </div>
  );
}

export default App;
