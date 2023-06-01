import './App.css';
import { Navbar } from './components/NavBar/Navbar';
import { Content } from './components/Content/Content';
import { ProvasProvider } from './Contexts/ProvasContext';

function App() {
  return (
    <div id="main">
      <ProvasProvider>
      <Navbar/>
      <Content/>
      </ProvasProvider>
      
    </div>
  );
}

export default App;
