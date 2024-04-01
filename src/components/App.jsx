// import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import { useDispatch } from 'react-redux';
import Title from './Title/Title';
import s from './App.module.css';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps';
import { loading } from '../redux/contactsSlice';

export default function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts);
    }, [dispatch]);

    return (
        <div className={s.container}>
            <Title />
            {/* <ContactForm /> */}
            <SearchBox />
            <ContactList />
            {loading && <b>Request in progress...</b>}
        </div>
    );
}
