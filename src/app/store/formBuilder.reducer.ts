import { fieldStylesAction, formStylesAction } from "./formBuilder.actions"
import { FormsValues } from "../builder/form-accordion/form-accordion.component";
import { FieldsValues } from './../builder/field-accordion/field-accordion.component';
import { createReducer, on } from "@ngrx/store"
import { draggedActions } from "./formBuilder.actions"
import { Item } from '../builder/drag-and-drop/drag-and-drop.component';


export interface BuilderState { 

	fieldStyles: FieldsValues,
	formStyles: FormsValues,
	item: Item
} 
export const initialState: BuilderState = {
	fieldStyles: {

		labelField: "Name",
		width: 380,
		height: 50,
		fontSize: 14,
		fontWeight: 400,
		colorInput: 'red',
		borderStyle: 'none',
		requiredField: true,
	},
	formStyles: {
		labelForm: 'labelForm',
		textColor: 'blue',
		bcgColor: "gray",
		borderType: "4px",
		borderColor: 'black',
	},
	item: {
		name: 'input',
		id: 0
	}
};
export const builderReducer = createReducer(
	initialState,
	on(draggedActions, (state, { id, name }) => ({ ...state, name, id })),
	on(fieldStylesAction, (state, { fieldsValues }) =>  (
		{
	...state,
	labelField: fieldsValues.labelField,
	width:fieldsValues.width,
	height:fieldsValues.height,
	fontSize:fieldsValues.fontSize,
	fontWeight:fieldsValues.fontWeight,
	colorInput:fieldsValues.colorInput,
	borderStyle:fieldsValues.borderStyle,
	requiredField: fieldsValues.requiredField
	
})),
	on(formStylesAction, (state, { formValues }) => ({
		...state,
		labelForm:formValues.labelForm,
		textColor: formValues.textColor,
		bcgColor: formValues.bcgColor,
		borderType:formValues.borderType,
		borderColor:formValues.borderColor
	}))
);


