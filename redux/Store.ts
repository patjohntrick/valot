import { configureStore } from '@reduxjs/toolkit';
import AgentReducer from './slice/AgentSlice';

export const Store = configureStore({
  reducer: {
    agent: AgentReducer,
  },
});
