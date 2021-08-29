import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement } from '../actions/counter.actions';

// 状态名称
export const counterFeatureKey = 'counter';

// 状态类型接口
export interface State {
  count: number
}

// 初始状态
export const initialState: State = {
  count: 0
};

// 创建 reducer 函数
export const reducer = createReducer(
  initialState,
  on(increment, (state, action)=>({
    ...state,
    count: state.count + action.count
  })),
  on(decrement, (state)=>({
    ...state,
    count: state.count - 1
  }))
);

