
import { selectorFields } from './../../store/formBuilder.selector';
import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html'
  
})

export class InputComponent implements OnInit {
	constructor(private readonly store: Store) { }
	
  res: any

  buidlerState$ = this.store.select(selectorFields)
  
	ngOnInit(): void {
	 this.buidlerState$.subscribe(result => this.res = result)
	}
	

}
