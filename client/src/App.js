import { Routes, Route } from 'react-router-dom'


import Home from "./pages/Home";
import SignUp from "./pages/Auth/SignUp";
import Login from './pages/Auth/Login';
import Dashboard from './pages/Dashboard/Dashboard';



function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
}

export default App;
