import { formStylesAction } from '../../store/formBuilder.actions';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BuilderState } from 'src/app/store/formBuilder.reducer';

export interface FormsValues { 
	labelForm: string | undefined,
	textColor: string | undefined,
   bcgColor: string | undefined,
   borderType: string | undefined,
   borderColor: string | undefined,
	}

@Component({
  selector: 'app-form-accordion',
  templateUrl: './form-accordion.component.html',
  styleUrls: ['./form-accordion.component.css']
})
	
	
export class FormAccordionComponent implements OnInit {

  constructor(private store: Store<BuilderState>) { }

  ngOnInit(): void {
  }
	formValues!: FormsValues

	formStyles = new FormGroup({
      label: new FormControl(),
      textColor: new FormControl(),
      bcgColor: new FormControl(),
      borderType: new FormControl(),
      borderColor: new FormControl(),
	});
	
	onSubmit() {
		console.log(this.formStyles.value)
		this.formValues = {
			labelForm: this.formStyles.value.label,
			textColor: this.formStyles.value.textColor,
			bcgColor: this.formStyles.value.bcgColor,
			borderType: this.formStyles.value.borderType,
			borderColor: this.formStyles.value.borderColor,
		}
		this.store.dispatch(formStylesAction({formValues: this.formValues}))
		this.formStyles.reset()
		console.log(this.formValues)
	}

}
