import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

interface FormsValues { 
	label: string | undefined,
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

  constructor() { }

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
			label: this.formStyles.value.label,
			textColor: this.formStyles.value.textColor,
			bcgColor: this.formStyles.value.bcgColor,
			borderType: this.formStyles.value.borderType,
			borderColor: this.formStyles.value.borderColor,
		}
		this.formStyles.reset()
		console.log(this.formValues)
	}

}
