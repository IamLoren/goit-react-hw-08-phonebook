import React from 'react';
import Header from 'components/Header/Header';
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations.js';
import { toast } from 'react-toastify';

const Login = () => {
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm({
        defaultValues: {
            email: 'iryna.kostromytska@gmail.com',
            password: '1234567',
        }
    });
    const submit = data => {
        dispatch(loginThunk(data)).unwrap().then((res) => {
            toast.success(`Welcome ${res.user.name}`)
        }).catch(()=> {
           toast.error('Oops! Something went wrong')
        })
    }
  return (
    <div>
        <Header title='Type your data'/>
        <form onSubmit={handleSubmit(submit)}>
            <label >
                <span>Email</span>
                <input {...register('email')} type="email" />
            </label>
            <label >
                <span>Password</span>
                <input {...register('password')} type="password" />
            </label>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login