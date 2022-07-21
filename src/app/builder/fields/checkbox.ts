import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-checkbox',
	template: `<input type="checkbox">`
})
export class CheckboxComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
