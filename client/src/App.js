import { Routes, Route, useSearchParams } from 'react-router-dom'

import Home from "./pages/Home";
import SignUp from "./pages/Auth/SignUp";
import Login from './pages/Auth/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import PageNotFound from './pages/PageNotFound';
import AuthRoute from './components/Route/AuthRoute';



function App() {

  const [searchParams] = useSearchParams()

  const urlRef = searchParams.get('ref')

  if(urlRef) localStorage.setItem('referrer', urlRef)
  

  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/signup' element={<SignUp refID={urlRef || localStorage.getItem('referrer') || ''} />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<AuthRoute><Dashboard /></AuthRoute>} />

      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
