import './App.css';
import Login from './components/Login/Login'
import Listado from './components/Login/Listado';
import { Routes , Route } from 'react-router-dom'

function App() {//cambia component a element y Switch a Routes
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/listado' element={<Listado/>}/>
        
      </Routes>
         
      
    </div>
  );
}

export default App;
