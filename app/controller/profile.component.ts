import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import { User } from '../model/user';
import { CategoryDetailComponent } from './category-detail.component';
import { UserService } from '../service/user.service';


@Component({
	selector: 'my-post',
	templateUrl: 'app/view/profile.component.html',
	styleUrls: ['app/view/profile.component.css']
})
export class ProfileComponent {
	user: User = new User();

	getUser(): User {
		return this._userService.getCurrentUser();
	}

	constructor(private _router: Router, private _userService: UserService) {
		this.user = this._userService.getCurrentUser();
    }
}
