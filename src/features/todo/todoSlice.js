import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:nanoid,text:"Hello"}]
}
export const todoSlice=createSlice({
    name:"todo",
    initialState,
    //reducers are used to manage functions
    reducers:{
        addtodo:(state,action)=>{
            //todo creating
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        //remove todo by ffiltering
        removetodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>
                todo.id!==action.payload)
        }
    }

})
export const {addtodo,removetodo}=todoSlice.actions;
export default todoSlice.reducer;
