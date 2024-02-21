
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landingpage from './Component/Landingpage';
import Contact from './Component/Contact';
import Header from './Component/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
      
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
