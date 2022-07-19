import { UserService } from '../auth/_services/user.service';
import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from "../auth/_models/User";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    loading = false;
    users: User[] | undefined;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
}