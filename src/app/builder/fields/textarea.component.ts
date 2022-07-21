import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-textarea',
  template: `<textarea></textarea>`,
  
})
export class TextareaComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
