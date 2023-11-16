import { createSlice } from "@reduxjs/toolkit";
import { todoData } from "../../components/Data";

const initialState = { todoData };
export const todoslice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtask: (state, action) => {
      state.todoData = [action.payload, ...state.todoData];
    },
    deletetask: (state, action) => {
      state.todoData = state.todoData.filter((el) => el.id !== action.payload);
    },
    updatetask:(state,action)=>{
      const indextodoupdated =state.todoData.findIndex(el=>el.id === action.payload.id )
      state.todoData[indextodoupdated] = action.payload.todo 

    }
  }
});

export const { addtask, deletetask,updatetask} = todoslice.actions;
export default todoslice.reducer;

// addtask,deletetask,updateTask

//
// updateTask : (state,action)=> {
//     const indextodoupdate = state.todoData.findIndex((el) => el.id === action.payload.id)
//     state.todoData[indextodoupdate] = action.payload.todo
// }
