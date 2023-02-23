import { CreateContact} from "components/Form/ContactForm";
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactsList } from 'components/ContactList/ContactsList';
import { useSelector } from "react-redux";
import { contactsSelect} from 'redux/selector';

export const ContactPage = () => {
  const contactsAdd= useSelector(contactsSelect);
  return (
    <>
      <CreateContact />
      {contactsAdd.length === 0 ? (
        <p>There is no contacts</p>
      ) : (
        <>
          <ContactFilter />
          <ContactsList />
        </>
      )}
      
    </>
  );
};

