import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Contacts from './Contacts/Contacts';
import { PublicRoute } from './Public/PublicRoute';
import { Login } from 'pages/Login';
import { SignUp } from 'pages/SignUp';
import { Navigation } from './Navigation/Navigation';
import { PrivateRoute } from './Private/PrivateRoute';

import style from './App.module.css';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
