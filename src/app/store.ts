import { ITodo } from './todo';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS } from './action';



export interface IAppState {
  //datas we will be needing to implement our todo
  todos: ITodo[];
  lastUpdate: Date;

}

//defining the INT STATE to assign the values of the state properties
//which should be set initially when we later on connect our store to our app
//we can use INT STATE is checked here from that file to init a state w/ some values

export const INITIAL_STATE: IAppState = {
    todos: [],
    lastUpdate: null
}

//my reducer function that takes two parameters,
// which is the old state and the action which is  dispatched
export function rootReducer(state,action) {
    switch(action.type){
        case ADD_TODO:
            action.todo.id = state.todos.length + 1;
            return Object.assign({}, state,{
                todos : state.todos.concat(Object.assign({}, action.todo)),
                lastUpdate : new Date()
            }) 

        case TOGGLE_TODO:
            var todo = state.todos.find( t => t.id == action.id == action.id);
            var index = state.todos.indexOf(todo);

            return Object.assign({}, state, {
                todos: [
                   ...state.todos.slice(0, index),
                   Object.assign({}, todo, {isCompleted: !todo.isCompleted}),
                   ...state.todos.slice(index+1)
                ],
                lastUpdatee: new Date()
            })

        case REMOVE_TODO:
            return Object.assign({}, state, {
            todos: state.todos.filter(t => t.id !== action.id),
            lastUpdate : new Date()
        })

        case REMOVE_ALL_TODOS:
            return Object.assign({}, state, {
                todos: [],
                lastUpdate: new Date()
            })
    }
    return state; //the reducer will now take the old state and returns it w/out making any changes to a new state object 
}