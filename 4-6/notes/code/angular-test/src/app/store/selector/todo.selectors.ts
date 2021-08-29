import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '..';
import { adapter, State, todoFeatureKey } from '../reducers/todo.reducer';

// 四个获取方式获取的数据结构不同
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors()

export const selectTodo = createFeatureSelector<AppState, State>(todoFeatureKey)

export const selectTodos = createSelector(selectTodo, selectAll)
