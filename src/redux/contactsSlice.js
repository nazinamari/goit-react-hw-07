import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsOps';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder =>
        builder
            .addCase(fetchContacts.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, state => {
                state.error = true;
            }),
});

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;

export const contactsReducer = contactsSlice.reducer;

// reducers: {
//     addContact: {
//         reducer: (state, action) => {
//             state.items.push(action.payload);
//         },
//         prepare: oldPayload => {
//             return {
//                 payload: {
//                     ...oldPayload,
//                     id: nanoid(),
//                 },
//             };
//         },
//     },
//     deleteContact: (state, action) => {
//         const contactId = action.payload;
//         state.items = state.items.filter(
//             contact => contact.id !== contactId,
//         );
//     },
// },
