import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import { User } from '../model/user';
import { CategoryDetailComponent } from './category-detail.component';
import { UserService } from '../service/user.service';


@Component({
	selector: 'my-post',
	templateUrl: 'app/view/profile.component.html',
	// styleUrls: ['app/view/categories.component.css']
})
export class ProfileComponent {

	getUser(): User {
		return this._userService.getCurrentUser();
	}

	constructor(private _router: Router, private _userService: UserService) {	  }
	diagnostic: string;

}
