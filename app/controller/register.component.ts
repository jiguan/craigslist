import { Component } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';
import { User } from '../model/user';

@Component({
	selector: 'register',
	templateUrl: 'app/view/register.component.html'
})

export class RegisterComponent {
	user = new User();
	constructor(private _router: Router, private _routeParams: RouteParams) {}
	ngOnInit() {

	}
	onSubmit() {
		console.log(this.user);
		// let link = ['CategoryDetail', { id: this.post.category }];
		// this._router.navigate(link);
	}
	goBack() {
		window.history.back();
	}
}
