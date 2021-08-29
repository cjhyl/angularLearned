import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCounter from './reducers/counter.reducer';

// store中存储的状态类型接口 即状态名称和状态类型的对应关系
export interface AppState {

  [fromCounter.counterFeatureKey]: fromCounter.State;
}

// 状态名称和reducer的对应关系
export const reducers: ActionReducerMap<AppState> = {

  [fromCounter.counterFeatureKey]: fromCounter.reducer,
};

function logger (reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function (state,action) {
    var result = reducer(state,action);
    // console.log('logger')
    // console.log('新状态',result)
    // console.log('上一次状态',state,action)
    return result
  }
}


export const metaReducers: MetaReducer<AppState>[] = !environment.production 
? [logger] 
: [];
