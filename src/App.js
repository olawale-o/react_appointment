import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/authentication/Login';
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
              <Detail />
            </PrivateRoute>
          )
        }
        exact
      />
    </Routes>
  </div>
);
export default App;
