import { BuilderState } from 'src/app/store/formBuilder.reducer';
import { createFeatureSelector, createSelector } from "@ngrx/store";



export const selectorState = createFeatureSelector<BuilderState>('builder')

export const selectorForms = createSelector(selectorState, state => state.formStyles);
export const selectorFields = createSelector(selectorState, state => state.fieldStyles);
export const selectorItems = createSelector(selectorState, state => state.item);