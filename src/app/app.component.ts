import { LoginComponent } from './auth/login/login.component';
import { DragAndDropComponent } from './builder/drag-and-drop/drag-and-drop.component';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './auth/_services/authentication.service.ts';
import { User } from "./auth/_models/User";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	currentUser: User = {
	 id:  0 ,
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    token: "",
	};


	constructor(
       private router: Router,
		 private authenticationService: AuthenticationService,  
	)
	{
		 this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
		 console.log(this.currentUser)
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
	 }
	
}
