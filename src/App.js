// import logo from './logo.svg';
import { Button, ButtonBase } from '@mui/material'
import './App.css';
import Contador from './components/Contator';
import FetchNews from './components/FetchNews';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá Mundo</h1>
        <FetchNews />
        <Contador />      
        </header>
    </div>
  );
}

export default App;
