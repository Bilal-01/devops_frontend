///store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer/rootReducer';

const store = configureStore({
    reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export default store;