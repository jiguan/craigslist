import { Component } from 'angular2/core';
import { Post } from '../model/post';

@Component({
	selector: 'new-post',
	templateUrl: 'app/view/new-post.component.html'
})

export class NewPostComponent {
	post = new Post();
	create(post: Post) {
		this.post = post;
		console.log(post);
	}
	goBack() {
		window.history.back();
	}
	get diagnostic() { return JSON.stringify(this.post); }
}
