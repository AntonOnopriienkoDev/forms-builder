import { createAction,props } from '@ngrx/store';
import { FieldsValues } from 'src/app/builder/field-accordion/field-accordion.component';
import { FormsValues } from 'src/app/builder/form-accordion/form-accordion.component';


export const formStylesAction = createAction('[FormStyle Accordion] formStyles',
	props<{ formValues:FormsValues }>());

export const fieldStylesAction = createAction('[FieldStyle Accordion] fieldStyles',
	props < { fieldsValues:FieldsValues }>());

export const draggedActions = createAction('[DragAndDrop] dragged', props <{id:number,name:string}>())