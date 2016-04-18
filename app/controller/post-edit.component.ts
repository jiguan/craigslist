import { Component } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';
import { Post } from '../model/post';
import { PostService } from '../service/post.service';

@Component({
	templateUrl: 'app/view/post-edit.component.html'
})

export class PostEditComponent {
	post: Post;
	constructor(private _router: Router, private _routeParams: RouteParams, private _postService: PostService) {
		let id = this._routeParams.get('id');
		if(id!==null) {
			this._postService.getPost(id).subscribe(
				 data => { this.post = data },
				 err => console.error(err)
			 );
		} else {
			this.post = new Post();
			this.post.categoryId = this._routeParams.get('categoryId');
		}
	}
	savePost() {
		this._postService.savePost(this.post).subscribe(
			data => { this.post = data },
   		 	err => console.error(err)
		);
		let link = ['CategoryDetail', { id: this.post.categoryId }];
		this._router.navigate(link);
	}
	goBack() {
		window.history.back();
	}
	get diagnostic() { return JSON.stringify(this.post); }
}
