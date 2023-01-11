import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route path='/dashboard' element={ <Dashboard /> } />
        <Route path='/register' element={ <Register /> } />
      </Routes>
    </Router>
  );
}

export default App;
