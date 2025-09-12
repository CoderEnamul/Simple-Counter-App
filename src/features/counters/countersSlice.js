import { createSlice } from "@reduxjs/toolkit";
import initialCounters from "../../data/initialCounters";

const counterSlice = createSlice({
    name : "counters",
    initialState: initialCounters,
    reducers:{
        increment: (state, action)=> {
            //we will get counterId from action.payload
            const counterIndex = state.findIndex((c) => c.id === action.payload);
            state[counterIndex].value++; 
        },
        decrement: (state, action)=> {
              const counterIndex = state.findIndex((c) => c.id === action.payload);
            state[counterIndex].value--; 
        },
        reset: (state, action) => {

             const counterIndex = state.findIndex((c) => c.id === action.payload);

            state[counterIndex].value = 0; 
        }
    }

})

export default counterSlice.reducer;

export const {increment, decrement, reset} = counterSlice.actions;