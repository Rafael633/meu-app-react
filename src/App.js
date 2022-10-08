import { Button, ButtonBase } from '@mui/material'
import './App.css';
import Contador from './components/Contator';
import FetchNews from './components/FetchNews';
import FetchProducts from './components/FetchProducts';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá Mundo</h1>
        <div style={{ padding: "2rem" }}>
          <FetchProducts />
          {/* <FetchNews />
          <Contador />  */}
        </div>
      </header>
    </div>
  );
}

export default App;