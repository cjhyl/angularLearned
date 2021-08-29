import { createAction, props } from '@ngrx/store';

export const increment = createAction('increment', props<{ count: number }>());
export const decrement = createAction('decrement');
// 3. 在 Action 文件中新增执行异步操作的 Action
export const async_increment = createAction('async_increment');



