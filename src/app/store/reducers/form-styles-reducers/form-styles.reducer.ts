import { createReducer, on } from '@ngrx/store';
import { formLabel,textColor,bgcColor,borderType,borderColor } from './form-styles.actions';

export const initialState = 0;

export const formLabelReducer = createReducer(
  initialState,
  on(formLabel, (state) => state + 1),
  on(textColor, (state) => state - 1),
  on(bgcColor, (state) => + state + 500),
  on(borderType, (state) => + state + 500),
  on(borderColor, (state) => + state + 500)
);