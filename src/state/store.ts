import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import languageReducer from "./language/languageSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        language: languageReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;