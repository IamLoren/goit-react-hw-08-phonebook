import React from 'react';
import { SearchFilter } from 'components/SearchFilter/SearchFilter';
import { Hearts } from 'react-loader-spinner';
import { selectError, selectLoading } from '../../redux/selectors.js';
import { useSelector } from 'react-redux';
import { ContactsList } from '../contactsList/ContactsList.jsx';
import Header from 'components/Header/Header.jsx';

const ContactList = () => {
 const loading = useSelector(selectLoading);
 console.log(loading)
  const error = useSelector(selectError);
  return (
    <>
    <Header/>
    <h2>Contacts</h2>
      <SearchFilter />
      {loading && (
          <Hearts
            height="80"
            width="80"
            color="purple"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
    <ContactsList>
        {error && <h2>Oops! Something went wrong! Try again!</h2>}
      </ContactsList></>
  )
}

export default ContactList