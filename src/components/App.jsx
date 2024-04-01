// import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import Title from './Title/Title';
import s from './App.module.css';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps';
import { selectIsLoading } from '../redux/contactsSlice';

export default function App() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchContacts);
    }, [dispatch]);

    return (
        <div className={s.container}>
            <Title />
            {/* <ContactForm /> */}
            <SearchBox />
            <ContactList />
            {isLoading && <b>Request in progress...</b>}
        </div>
    );
}
