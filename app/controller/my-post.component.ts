import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import { Post } from '../model/post';
import { CategoryDetailComponent } from './category-detail.component';
import { PostService } from '../service/post.service';

@Component({
	selector: 'my-categories',
	templateUrl: 'app/view/categories.component.html',
	styleUrls: ['app/view/categories.component.css']
})
export class MyPostComponent implements OnInit {
	posts: Post[];
	constructor(private _router: Router, private _postService: PostService) { }
	gotoDetail(post: Post) {
		let link = ['PostDetail', { id: post.id }];
		this._router.navigate(link);
	}
	ngOnInit() {
		this.posts = this._postService.getPostsOfUser(1);
	}
}
