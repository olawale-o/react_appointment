import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/authentication/Login';
import Home from './components/home/Home';
import List from './components/doctor/List';
import NewDoctor from './components/doctor/NewDoctor';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<List />} />
        <Route path="doctor/new" element={<NewDoctor />} />
      </Route>
      <Route path="/login" element={<Login />} exact />
    </Routes>
  </div>
);
export default App;
