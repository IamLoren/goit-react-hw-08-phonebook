import { InputField } from './InputField/InputField';
import  ContactList  from '../components/ContactList/ContactList';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from '../redux/auth/operations.js';
import PrivateRoute from '../routesConfig/PrivateRoute.jsx';


export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk())
  },[dispatch])
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/input' element={<PrivateRoute><InputField /></PrivateRoute>}/>
        <Route path='/list' element={<PrivateRoute><ContactList /></PrivateRoute>}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
  
      
    </div>
  );
};
