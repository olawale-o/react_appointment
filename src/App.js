import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/authentication/Login';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Login />} exact />
      <Route path="/login" element={<Login />} exact />
    </Routes>
  </div>
);
export default App;
