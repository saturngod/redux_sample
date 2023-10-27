import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface LangguageState {
    value: String
}

const initialState: LangguageState = {
    value: "en"
}

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        changeLang: (state,action: PayloadAction<String>) => {
            state.value = action.payload;
        }
    }
})

export const {changeLang} = languageSlice.actions

export default languageSlice.reducer;