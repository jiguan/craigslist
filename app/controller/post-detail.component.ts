import { Component, OnInit } from 'angular2/core';
import { PostService } from '../service/post.service';
import { UserService } from '../service/user.service';
import { RouteParams,  Router  } from 'angular2/router';
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
	constructor(private _router: Router, private _postService: PostService, private _routeParams: RouteParams, private _userService: UserService) {
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
	gotoComment(): void {
		 window.location.href = window.location.href + "#addComment";
	}

	addComment(comm: string) {
		this.isCollapsed = true;
		var newComment = new Comment(this.post.id, this._userService.getCurrentUser());
		newComment.comment = comm;
		this.comments.push(newComment);
	}
	editPost(post: Post) {
		let link = ['PostEdit', { id: post.id }];
		this._router.navigate(link);
	}
	goBack() {
		window.history.back();
	}
}
