import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-button',
  template: `<button >Button</button>`,
  
})
export class ButtonComponent implements OnInit {

	constructor(private store: Store) { }
	

  ngOnInit(): void {
  }

}
