import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import Title from './Title/Title';
import s from './App.module.css';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps';
import { selectError, selectIsLoading } from '../redux/contactsSlice';
import ErrorMessage from './ErrorMessage/ErrorMessage';

export default function App() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className={s.container}>
            <Title />
            <ContactForm />
            <SearchBox />
            <ContactList />
            {isLoading && <b>Request in progress...</b>}
            {error && <ErrorMessage />}
        </div>
    );
}
