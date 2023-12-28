import Header from "components/Header/Header"
import { useSelector, useDispatch } from "react-redux"
import { selectUserName } from "../redux/contacts/selectors.js";
import { fetchContactsThunk } from "../redux/contacts/operations.js";
import { useEffect } from "react";

const Home = () => {
    const user = useSelector(selectUserName)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchContactsThunk())
    }, [dispatch])

  return (
    <>
     <Header />
     <main>
        {!user && <h2>Welcome in your personal Phonebook!</h2>}
     </main>
     </>
  )
}

export default Home