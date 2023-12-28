import Header from "components/Header/Header"
import { useSelector } from "react-redux"
import { selectUserName } from "../redux/selectors.js";

const Home = () => {
    const user = useSelector(selectUserName)
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