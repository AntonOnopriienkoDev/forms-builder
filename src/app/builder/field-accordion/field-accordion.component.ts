import { HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-accordion',
  templateUrl: './field-accordion.component.html',
  styleUrls: ['./field-accordion.component.css']
})
export class FieldAccordionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

	handleField() { 
		console.log('click Field!')
	}
}
