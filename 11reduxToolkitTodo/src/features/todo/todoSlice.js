// slice are reducers we use createSlice() method to create reducer
import {createSlice,nanoid} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const initialState={
    todos:[{
        id:1,
        text:"Hello Anurag Redux Toolkit"
    }]
}

//slice is bigger version of reducer
export const todoSlice=createSlice({
    name: 'todo',
    initialState,

    //reducers, inside reducers all the method has always access of state and action property

    reducers:{

        //adding todo into todos.......................................
        addTodo : (state,action)=>{
            
            //checking for empty input do not add into todos
            if(action.payload === '') return
            
            //creating todo....
            const todo={
                id:nanoid(),          //generating unique id for todo is
                text:action.payload   // text:action.payload.text  getting text from todo
            }
            //adding todo into intialState
            state.todos.push(todo);    
        },

        //removeTodo / deleteTodo...........................
        removeTodo:(state,action)=>{
            
            const id=action.payload;
            state.todos = state.todos.filter( (todo) => todo.id !== id )

            // state.todos=state.todos.filter((todo)=>{

            //     todo.id !== id;
            // })

        },

        //update todo...............................
        updateTodo:(state,action)=>{

       state.todos.map((todo)=>{

           if(todo.id === action.payload){
            return todo.text = todo.text+" anurag"
           }

           return todo
          
        })
         
        },

    }

})

export const { addTodo, removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer