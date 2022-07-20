import { Component, OnInit} from '@angular/core';
import { CdkDragDrop, copyArrayItem,transferArrayItem } from '@angular/cdk/drag-drop';


interface Item { 
	type: string,
	id: any
}


@Component({
	selector: 'app-drag-and-drop',
	templateUrl: './drag-and-drop.component.html',
	styleUrls: ['./drag-and-drop.component.css']
})
	
export class DragAndDropComponent implements OnInit {
	constructor() { }
	ngOnInit(): void {
		setTimeout(() => {this.label.splice(0,1) },500)
	}


	elems = [{ type: "input", id: 0 }, { type: "textarea", id: 0  }, { type: "select", id: 0  }, { type: 'button', id: 0 }, { type: 'checkbox', id: 0  }];

	label = [{ type: 'test', id: 0 }];


	drag(event: CdkDragDrop<Item[]>) {
		if (event.container !== event.previousContainer && event.previousContainer.id === 'list') {

			copyArrayItem(
				event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex
			)
	
		}
		if (event.container === event.previousContainer && event.previousContainer.id !== 'list') {
			transferArrayItem(
				event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex,
			);
			
			
		}
	
	}
}


