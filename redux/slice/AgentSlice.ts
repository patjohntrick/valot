import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export const AgentSlice = createSlice({
  name: 'Agents',
  initialState: {
    agent: [],
  },
  reducers: {
    setAgent: (state, action: PayloadAction<any>) => {
      state.agent.push(action.payload);
    },
    removeAgent: (state) => {
      state.agent = [];
    },
  },
});

export const { setAgent, removeAgent } = AgentSlice.actions;
export default AgentSlice.reducer;
