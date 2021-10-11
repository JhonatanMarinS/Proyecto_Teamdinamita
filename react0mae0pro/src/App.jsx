import Layout1 from './layouts/Layout1';
import MaePro from './components/ContenidoMaePro';

import V02MaePro from './pages/v02MaePro';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import 'styles/intMaePro.css';
import 'styles/V02.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout1>
        <MaePro></MaePro>
      </Layout1>
    </div>
  );
}

export default App;
