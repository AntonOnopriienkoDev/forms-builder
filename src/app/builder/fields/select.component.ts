import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-select',
  template: `<select></select>`,
})
export class SelectComponent implements OnInit {

  constructor(private store: Store) { }

	ngOnInit(): void {
	  
  }

}
