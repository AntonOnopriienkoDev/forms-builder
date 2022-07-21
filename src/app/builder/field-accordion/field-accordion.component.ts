import { fieldStylesAction } from '../../store/formBuilder.actions';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BuilderState } from 'src/app/store/formBuilder.reducer';

export interface FieldsValues { 
	labelField: string
	width: string | number
	height: string | number
	fontSize: string | number
	fontWeight: string | number
	colorInput: string | number
	borderStyle: string
	requiredField: boolean
}


@Component({
  selector: 'app-field-accordion',
  templateUrl: './field-accordion.component.html',
  styleUrls: ['./field-accordion.component.css']
})
export class FieldAccordionComponent implements OnInit {

  constructor(private store: Store<BuilderState>) { }

  ngOnInit(): void {
  }
	fieldsValues!: FieldsValues
	
	fieldStyle = new FormGroup({
      label: new FormControl(),
      width: new FormControl(),
      height: new FormControl(),
      fontSize: new FormControl(),
      fontWeight: new FormControl(),
      colorInput: new FormControl(),
      borderStyle: new FormControl(),
      requiredField: new FormControl(),
  });

	
	onSubmit() {
		
		console.log(this.fieldStyle.value)
		this.fieldsValues = {
			labelField: this.fieldStyle.value.label,
			width: this.fieldStyle.value.width,
			height: this.fieldStyle.value.height,
			fontSize: this.fieldStyle.value.fontSize,
			colorInput: this.fieldStyle.value.colorInput,
			borderStyle: this.fieldStyle.value.borderStyle,
			requiredField: this.fieldStyle.value.requiredField,
			fontWeight: this.fieldStyle.value.fontWeight,
		}
		this.store.dispatch(fieldStylesAction({ fieldsValues: this.fieldsValues }))
		
		this.fieldStyle.reset()
		console.log(this.fieldsValues)
	}
}