///rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';
import voteReducer from './voteSlice';

const rootReducer = combineReducers({
    vote: voteReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;