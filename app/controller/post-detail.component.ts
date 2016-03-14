import { Component, OnInit } from 'angular2/core';
import { PostService } from '../service/post.service';
import { RouteParams } from 'angular2/router';
import { Post } from '../model/post';

@Component({
	selector: 'post-detail',
	templateUrl: 'app/view/post-detail.component.html',
    styleUrls: ['app/view/post-detail.component.css']
})

export class PostDetailComponent implements OnInit {
	post: Post;
	constructor(private _postService: PostService, private _routeParams: RouteParams) {}
	ngOnInit() {
		let id = +this._routeParams.get('id');
		this._postService.getPost(id).then(post => this.post = post);
	}
	addComment(commentId: number) {
		alert(commentId);
	}
	goBack() {
		window.history.back();
	}
}
