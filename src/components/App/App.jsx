import { CreateContact} from 'components/Form/ContactForm';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactsList} from 'components/ContactList/ContactsList';
import styles from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { contactsSelect} from 'redux/selector';
export const App = () => {

  const dispatch = useDispatch();
 const contactsAdd= useSelector(contactsSelect);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <CreateContact />
        {contactsAdd.length === 0 ? (
        <p>There is no contacts</p>
      ) : (
        <>
          <ContactFilter />
          <ContactsList />
        </>
      )}  
    </div>
  );
};

