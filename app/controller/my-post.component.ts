import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import { User } from '../model/user';
import { CategoryDetailComponent } from './category-detail.component';
import { UserService } from '../service/user.service';


@Component({
	selector: 'my-post',
	templateUrl: 'app/view/my-post.component.html',
	// styleUrls: ['app/view/categories.component.css']
})
export class MyPostComponent implements OnInit {
	user: User
	constructor(private _router: Router, private _userService: UserService) { }

	ngOnInit() {
		this._userService.getUser(1).then(user => this.user = user);
		console.log(this.user);
	}
}
