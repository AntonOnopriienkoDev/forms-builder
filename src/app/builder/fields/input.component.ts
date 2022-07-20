import { selectorFields } from './../../store/formBuilder.selector';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-input',
  template: `<input>`,
  
})
export class InputComponent implements OnInit {
  buidler$ = this.store.select(selectorFields)
  constructor(private readonly store: Store ) { }

  ngOnInit(): void {
  }

}
