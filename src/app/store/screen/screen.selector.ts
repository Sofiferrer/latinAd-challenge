import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ScreenState } from './screen.reducer';

export const selectScreenFeature = createFeatureSelector<ScreenState>('screen');

export const selectAllScreens = createSelector(
  selectScreenFeature,
  (state: ScreenState) => state.screens
);

export const selectAllScreensError = createSelector(
  selectScreenFeature,
  (state: ScreenState) => state.error
);
