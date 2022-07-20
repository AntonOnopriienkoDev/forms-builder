import { builderReducer } from './formBuilder.reducer';
import { BuilderState } from 'src/app/store/formBuilder.reducer';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';


export interface State {
'builder': BuilderState
}

export const reducers: ActionReducerMap<State> = {
builder: builderReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];