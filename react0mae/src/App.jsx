
import './App.css';
import '../src/styles/V02.css'
import '../src/styles/intMaePro.css'
import Footer from './content/Footer';
import Header from './content/Header';
import MaestroPro from './pages/maestroPro';
import MaestroUsuario from './pages/maeUsuario';
import IntroPro from './pages/introPro';



function App() {
  return (
    <div className="App">
      <Header/>
      <IntroPro/>
      <Footer/>
    </div>
  );
}

export default App;
