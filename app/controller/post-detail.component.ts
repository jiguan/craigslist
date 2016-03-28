import { Component, OnInit } from 'angular2/core';
import { PostService } from '../service/post.service';
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

export class PostDetailComponent implements OnInit {
	post: Post;
	comments: Comment[];
	model: Comment;
	public isCollapsed:boolean = true;
	constructor(private _postService: PostService, private _routeParams: RouteParams) {}
	ngOnInit() {
		let id = this._routeParams.get('id');
		this.model = new Comment(id, 'unknown');
		this._postService.getPost(id).then(post => this.post = post);
		this._postService.getCommentsOfPost(id).then(comments => this.comments = comments);
	}
	addComment() {
		this.isCollapsed = true;
		var newComment = new Comment(this.model.id, this.model.user);
		newComment.comment = this.model.comment;
		this.comments.push(newComment);
		this.model.comment = '';
	}
	goBack() {
		window.history.back();
	}
}
