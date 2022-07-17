import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { counterReducer } from './counter.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
count: counterReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
