import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6422a7a077e7062b3e1ef770.mockapi.io';

export const addContact = createAsyncThunk(
  'contact/addContact',
  async (data, thunkAPI) => {
    try {
      console.log('post');
      const { data: result } = await axios.post('/tasks', data);
      return result;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchContact = createAsyncThunk(
  'contact/fetchContact',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      console.log('del');
      const response = await axios.delete(`/tasks/${taskId}`);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
