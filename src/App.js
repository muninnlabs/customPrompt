import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Routes from './routes/routes';
import CustomMenu from './components/customMenu';

function App() {
  return (
    <Router>
      <CustomMenu />
      
      <Routes />
    </Router>
  );
}

export default App;
