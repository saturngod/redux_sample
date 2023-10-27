import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils";

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        return amount;
    }
)

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state,action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.pending,() => {
            console.log("LOADING ... ");
        })
        .addCase(incrementAsync.fulfilled,(state,action) => {
            state.value += action.payload;
        });
    }
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;