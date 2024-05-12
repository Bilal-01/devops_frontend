/// voteSlice.ts


import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CountState {
    catCount: number;
    dogCount: number;
}

const initialState: CountState = { catCount: 0, dogCount: 0 };

const voteSlice = createSlice({
    name: 'vote',
    initialState: initialState,
    reducers: {
        increment(state: CountState, action: PayloadAction<string>) {
            action.payload === 'cat' ? state.catCount++ : state.dogCount++;
        },
        decrement(state: CountState, action: PayloadAction<string>) {
            action.payload === 'cat' ?
                state.catCount = state.catCount > 0 ? state.catCount - 1 : 0 :
                state.dogCount = state.dogCount > 0 ? state.dogCount - 1 : 0;
        },
    }
});

export const { increment, decrement } = voteSlice.actions;
export default voteSlice.reducer;