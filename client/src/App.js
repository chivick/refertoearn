import React, { Suspense } from 'react'
import { Routes, Route, useSearchParams } from 'react-router-dom'

import AuthRoute from './components/Route/AuthRoute';
import Loader from './components/Loader';

const Home = React.lazy(() => import("./pages/Home"))
const SignUp = React.lazy(() => import("./pages/Auth/SignUp"))
const Login = React.lazy(() => import('./pages/Auth/Login'))
const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'))
const PageNotFound = React.lazy(() => import('./pages/PageNotFound'))

function App() {

  const [searchParams] = useSearchParams()

  const urlRef = searchParams.get('ref')

  if(urlRef) localStorage.setItem('referrer', urlRef)
  

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/signup' element={<SignUp refID={urlRef || localStorage.getItem('referrer') || ''} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<AuthRoute><Dashboard /></AuthRoute>} />

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
