import { Action, createReducer, on } from '@ngrx/store';
import { addTodo, deleteTodo } from '../actions/todo.actions';
import { v4 as uuidv4 } from 'uuid'
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';


export const todoFeatureKey = 'todo';

export interface Todo {
  id: string
  title: string
}

export interface State extends EntityState<Todo> {}

export const adapter:EntityAdapter<Todo> = createEntityAdapter<Todo>()

/**
 * 数据格式 {ids:[],entities:{}}
 */
export const initialState: State = adapter.getInitialState()
console.log('initialState',initialState)


export const reducer = createReducer(
  initialState,
  on(addTodo, (state, action) => adapter.addOne(
    {
      id:uuidv4(),
      title:action.title
    },
    state
  )),
  on(deleteTodo, (state, action) => adapter.removeOne(
    action.id,
    state
  ))
);

