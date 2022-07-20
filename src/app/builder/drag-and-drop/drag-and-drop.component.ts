import { BuilderState } from './../../store/formBuilder.reducer';
import { Component, OnInit} from '@angular/core';
import { CdkDragDrop, copyArrayItem,transferArrayItem } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { draggedActions } from 'src/app/store/formBuilder.actions';


export interface Item { 
	name: string,
	id: number
}


@Component({
	selector: 'app-drag-and-drop',
	templateUrl: './drag-and-drop.component.html',
	styleUrls: ['./drag-and-drop.component.css']
})
	
export class DragAndDropComponent implements OnInit {
	constructor(private store:Store<BuilderState>) { }
	ngOnInit(): void {
		setTimeout(() => {this.label.splice(0,1) },500)
	}


	elems = [{ name: "input", id: 0 }, { name: "textarea", id: 0  }, { name: "select", id: 0  }, { name: 'button', id: 0 }, { name: 'checkbox', id: 0  }];

	label = [{ name: 'test', id: 0 }];


	drag(event: CdkDragDrop<Item[]>) {
		if (event.container !== event.previousContainer && event.previousContainer.id === 'list') {

			copyArrayItem(
				event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex
			)
			console.log(event.previousContainer.data[event.previousIndex])
			this.store.dispatch(draggedActions({ id: Date.now(), name: event.container.data[event.previousIndex].name }))
	
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


