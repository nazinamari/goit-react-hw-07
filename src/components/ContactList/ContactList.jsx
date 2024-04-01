import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
// import { selectFilterName } from '../../redux/filtersSlice';

export default function ContactList() {
    const contacts = useSelector(selectContacts);
    // const filterValue = useSelector(selectFilterName);

    // const filteredContacts = contacts.filter(contact =>
    //     contact.name.toLowerCase().includes(filterValue.toLowerCase()),
    // );

    return (
        <ul className={css.list}>
            {contacts.map(item => (
                <li key={item.id} className={css.item}>
                    <Contact data={item} />
                </li>
            ))}
        </ul>
    );
}
