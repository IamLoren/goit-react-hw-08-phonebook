import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserEmail } from '../../redux/selectors.js';
import styled from 'styled-components';
import { logoutThunk } from '../../redux/auth/operations.js';

const UserMenu = () => {
    const dispatch = useDispatch();
    const userEmail = useSelector(selectUserEmail)
  return (
<StyledLogout>
  <p>{userEmail ? userEmail : ''}</p>
  <button onClick={()=> {
          dispatch(logoutThunk())
        }}>Logout</button>
</StyledLogout>
  )
}

export default UserMenu

const StyledLogout = styled.div`
    width: fit-content;
    border: 1px solid purple;
    border-radius: 5px;
    padding: 10px;

    & p {
        width: 100%;
font-size: 18px;
color: purple;

    }
`