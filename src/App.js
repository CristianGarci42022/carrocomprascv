
import './App.css';
import Navbar from './componentes/Navbar';
import Productos from './componentes/Productos';
import PaginaPago from "./componentes/PaginaPago";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/Pagina-Pago' element={<PaginaPago/>}/>
          <Route exact path='/' element={<Productos/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
