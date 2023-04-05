import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContact } from './operations';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContact.pending](state) {
      state.isLoading = true;
    },
    [fetchContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [fetchContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [addContact.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addContact.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteContact.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.loading = false;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      console.log(index);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const contactsSlice = contactSlice.reducer;
