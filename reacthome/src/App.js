
import { Routes,Route,Link } from 'react-router-dom';
import './App.css';
import StartPage from './components/StartPage/StartPage';
import Toys from './components/Toys/Toys';


function App() {
  return (
    <div>
     <header>
     <a href="/Toys">Начать</a>
     </header>
     <Routes>
      <Route path="/Toys" element={<Toys/>}/>
     </Routes>
   </div>
  );
}

export default App;
