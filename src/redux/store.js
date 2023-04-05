import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './Slice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
  },
});
