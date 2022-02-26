import Jollas from './Pages/Jollas';
import Jolladetails from './compo/JollaDetails'
import {Routes ,Route , Link} from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
     <nav>
          <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/jollas'>Jollas</Link></li>
          
          </ul>
          </nav>
      

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/jollas" element={<Jollas/>}/>
        <Route path="/jollas/:id" element={<Jolladetails/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
