import { Component } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';
import { Post } from '../model/post';

@Component({
	selector: 'new-post',
	templateUrl: 'app/view/new-post.component.html'
})

export class NewPostComponent {
	post = new Post();
	constructor(private _router: Router, private _routeParams: RouteParams) {}
	ngOnInit() {
		this.post.category = this._routeParams.get('categoryId');
	}
	onSubmit() {
		console.log(this.post);
		let link = ['CategoryDetail', { id: this.post.category }];
		this._router.navigate(link);
	}
	goBack() {
		window.history.back();
	}
	get diagnostic() { return JSON.stringify(this.post); }
}
