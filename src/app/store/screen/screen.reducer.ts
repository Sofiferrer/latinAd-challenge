import { createReducer, on } from '@ngrx/store';
import { getAllFail, getAllSuccess } from './screen.action';

export interface ScreenState {
  screens: any[];
  error: string | null;
}

export const initialScreenState: ScreenState = {
  screens: [],
  error: null,
};

export const screenReducer = createReducer(
  initialScreenState,
  on(getAllSuccess, (state, { screens }) => ({
    ...state,
    screens,
    error: null,
  })),
  on(getAllFail, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage,
  }))
);
