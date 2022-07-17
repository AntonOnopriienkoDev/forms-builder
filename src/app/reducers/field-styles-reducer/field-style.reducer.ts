import { createReducer, on } from '@ngrx/store';
import { selectLabel, width, fontSize,
			fontWeight, colorInput, borderStyle,
			requiredField, apply, deleteField } from './field-style.action'

export const initialState = 0;
export const fieldLabelReducer = createReducer(
  initialState,
on(selectLabel,state => state = 1),
on(width,state => state = 1),
on(fontSize,state => state = 1),
on(fontWeight,state => state = 1),
on(colorInput ,state => state = 1),
on(borderStyle ,state => state = 1) ,
on(requiredField,state => state = 1), 
on(apply,state => state = 1),
on(deleteField,state => state = 1),
)