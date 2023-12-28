import React from 'react';
import Header from 'components/Header/Header';
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations.js';

const Register = () => {
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm();
    const submit = data => {
        dispatch(registerThunk(data))
    }
  return (
    <div>
        <Header title='Type your data'/>
        <form onSubmit={handleSubmit(submit)}>
            <label >
                <span>Name</span>
                <input {...register('name')} type="text" />
            </label>
            <label >
                <span>Email</span>
                <input {...register('email')} type="email" />
            </label>
            <label >
                <span>Password</span>
                <input {...register('password')} type="password" />
            </label>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register