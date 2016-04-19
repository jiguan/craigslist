import { Component, OnInit } from 'angular2/core';
import { PostService } from '../service/post.service';
import { UserService } from '../service/user.service';
import { RouteParams } from 'angular2/router';
import { Post } from '../model/post';
import { Collapse } from '../direct/collapse';
import { Comment } from '../model/comment';
import { CreateCommentDirective } from '../direct/create-comment.directive';

@Component({
	selector: 'post-detail',
	templateUrl: 'app/view/post-detail.component.html',
    styleUrls: ['app/view/post-detail.component.css'],
	directives: [CreateCommentDirective, Collapse],
})

export class PostDetailComponent {
	post: Post;
	comments: Comment[];
	public isCollapsed:boolean = true;
	constructor(private _postService: PostService, private _routeParams: RouteParams, private _userService: UserService) {
		let id = this._routeParams.get('id');
		this._postService.getPost(id).subscribe(
			 data => { this.post = data },
			 err => console.error(err)
		 );
		this._postService.getCommentsOfPost(id).subscribe(
			 data => { this.comments = data },
			 err => console.error(err)
		 );

	}
	addComment(comm: string) {
		this.isCollapsed = true;
		var newComment = new Comment(this.post.id, this._userService.getCurrentUser());
		newComment.comment = comm;
		this.comments.push(newComment);
	}

	goBack() {
		window.history.back();
	}
}
