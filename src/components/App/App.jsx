import { ContactPage } from 'components/Contacts/Contacts';
import styles from 'components/App/App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <ContactPage />
    </div>
  );
};

export default App