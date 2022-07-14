import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {

  constructor() { }

	ngOnInit(): void {
		setTimeout(() => { this.label.splice(0,1)},1000)
  }
  elems = ['Input', 'Textarea', 'CheckBox', 'Selector', 'Button'];

  label = [''];

	drag(event: CdkDragDrop<string[]>) {
		if ( event.container !== event.previousContainer && event.previousContainer.id === 'list' ) {
			copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)

		} 
		
		
	}
			
		
}

