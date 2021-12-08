import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/authentication/Login';
import Home from './components/home/Home';
import List from './components/doctor/List';
import NewDoctor from './components/doctor/NewDoctor';
import Detail from './components/doctor/Detail';
import PrivateRoute from './components/routes/PrivateRoute';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/login" element={<Login />} exact />
      <Route
        path="/"
        element={
          (
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          )
        }
        exact
      >
        <Route path="/" element={<List />} />
        <Route path="doctor/new" element={<NewDoctor />} />
        <Route path="doctor/:id" element={<Detail />} />
      </Route>
    </Routes>
  </div>
);
export default App;
