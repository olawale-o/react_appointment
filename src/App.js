import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/authentication/Login';
import Home from './components/home/Home';
import List from './components/doctor/List';
import NewDoctor from './components/doctor/NewDoctor';
import New from './components/booking/New';
import AllDoctors from './components/doctor/AllDoctors';
import All from './components/booking/All';
import Booking from './components/booking/Booking';
import NoMatch from './components/nomatch/NoMatch';
import Detail from './components/doctor/Detail';
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';
import Register from './components/authentication/Register';

const App = () => (
  <div className="App">
    <Routes>
      <Route
        path="/login"
        element={
          (
            <PublicRoute>
              <Login />
            </PublicRoute>
          )
        }
        exact
      />
      <Route
        path="/register"
        element={
          (
            <PublicRoute>
              <Register />
            </PublicRoute>
          )
        }
        exact
      />
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
        <Route index element={<List />} />
        <Route path="doctor/new" element={<NewDoctor />} />
        <Route path="doctor/:id" element={<Detail />} />
        <Route path="doctor/all" element={<AllDoctors />} />
        <Route path="appointment" element={<Booking />}>
          <Route index element={<New />} />
          <Route path="new" element={<New />} />
          <Route path="all" element={<All />} />
        </Route>
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </div>
);
export default App;
