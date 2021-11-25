import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/authentication/Login';
import Home from './components/home/Home';
import List from './components/doctor/List';
import NewDoctor from './components/doctor/NewDoctor';
import New from './components/booking/New';
import All from './components/booking/All';
import Booking from './components/booking/Booking';
import NoMatch from './components/nomatch/NoMatch';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<List />} />
        <Route path="doctor/new" element={<NewDoctor />} />
        <Route path="booking" element={<Booking />}>
          <Route path="new" element={<New />} />
          <Route path="all" element={<All />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} exact />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </div>
);
export default App;
