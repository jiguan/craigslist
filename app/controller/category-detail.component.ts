import { Component, OnInit } from 'angular2/core';
import { CategoryService } from '../service/category.service';
import { PostService } from '../service/post.service';
import { RouteParams, Router } from 'angular2/router';
import { Category } from '../model/category';
import { Post } from '../model/post';
import { Collapse } from '../direct/collapse';
import { CreatePostDirective } from '../direct/create-post.directive';


@Component({
	selector: 'category-detail',
	templateUrl: 'app/view/category-detail.component.html',
	// styleUrls: ['app/view/category-detail.component.css']
	 directives: [Collapse]
})

export class CategoryDetailComponent implements OnInit {
	category: Category;
	posts: Post[];
	public isCollapsed:boolean = false;
	constructor(private _router: Router, private _categoryService: CategoryService, private _postService: PostService, private _routeParams: RouteParams) {}
	ngOnInit() {
		let id = +this._routeParams.get('id');
		this._categoryService.getCategory(id).then(category => this.category = category);
		this._postService.getPostsUnder(id).then(posts => this.posts = posts);
	}
	gotoPost(post: Post) {
		let link = ['PostDetail', { id: post.id }];
		this._router.navigate(link);
	}
	createPost(categoryId: number) {
		let link = ['NewPost', { id: categoryId }];
		this._router.navigate(link);
	}
	goBack() {
		window.history.back();
	}
}
