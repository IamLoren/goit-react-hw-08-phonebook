import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLogged, selectUserName } from "../../redux/selectors.js";
import styled from "styled-components";
import UserMenu from "components/UserMenu/UserMenu.jsx";

const Header = ({title}) => {
  const user = useSelector(selectUserName)
  const isLoggedIn = useSelector(selectIsLogged);
  
  return (
    <StyledHeader>
        <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/input'>Add new contact</NavLink>
        <NavLink to='/list'>Find contact</NavLink>
        {!isLoggedIn &&
        <>
        <NavLink to='/register'>SignUp</NavLink>
        <NavLink to='/login'>Login</NavLink>
        </>}

        {isLoggedIn &&
          <UserMenu />}
        
    </nav>
    {user &&  <h1>Welcome to your Phonebook, {user}!</h1>}
     {!user && <h1>{title ? title : 'Phonebook'}</h1>} 
    </StyledHeader>
    
  )
}

export default Header

const StyledHeader = styled.header`
    width: 100%;
    padding: 20px 40px;

    & nav {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & h1 {
        text-align: center;
    }

    & a {
        text-decoration: none;
        color: purple;
        font-size: 25px;
        font-weight: 700;
    } 
    
    & .active {
            color: red;
        }
        & button {
          background: transparent;
          border: 2px solid purple;
          border-radius: 5px;
          padding: 10px 20px;
          font-size:20px;
          color: purple;
          font-weight: 700;
          transition: all 0.3s;

          &:hover {
            color: white;
            background-color: purple;
          }
        }
`