import { createAction, props } from '@ngrx/store';

export const getAll = createAction(
  '[Screen] Get All',
  props<{ url: string }>()
);
export const getAllSuccess = createAction(
  '[Screen] Get All Success',
  props<{ screens: Screen[] }>()
);
export const getAllFail = createAction(
  '[Screen] Get All Error',
  props<{ errorMessage: string }>()
);
export const getById = createAction('[Screen] GetById');
export const create = createAction('[Screen] Create');
export const update = createAction('[Screen] Update');
export const deleteById = createAction('[Screen] Delete');
