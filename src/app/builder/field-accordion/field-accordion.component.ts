import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-field-accordion',
  templateUrl: './field-accordion.component.html',
  styleUrls: ['./field-accordion.component.css']
})
export class FieldAccordionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
	
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
		this.fieldStyle.reset()
	}

}
