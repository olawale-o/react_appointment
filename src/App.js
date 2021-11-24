import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/authentication/Login';
import Home from './components/home/Home';
import List from './components/doctor/List';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<List />} />
        <Route path="add-a-doctor" element={<h1>Add a doctor</h1>} />
      </Route>
      <Route path="/login" element={<Login />} exact />
    </Routes>
  </div>
);
export default App;
