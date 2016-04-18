import { Component } from 'angular2/core';
import { CategoryService } from '../service/category.service';
import { PostService } from '../service/post.service';
import { RouteParams, Router } from 'angular2/router';
import { Category } from '../model/category';
import { Post } from '../model/post';
import { CreatePostDirective } from '../direct/create-post.directive';
import { BehaviorSubject } from 'rxjs/Rx';

@Component({
	selector: 'category-detail',
	templateUrl: 'app/view/category-detail.component.html',
	// styleUrls: ['app/view/category-detail.component.css']
	 directives: [CreatePostDirective],
})

export class CategoryDetailComponent {
	category: Category;
	posts: Post[];
	constructor(private _router: Router, private _categoryService: CategoryService, private _postService: PostService, private _routeParams: RouteParams) {
		let id = this._routeParams.get('id');
		this._categoryService.getCategory(id).subscribe(
			 data => { this.category = data },
			 err => console.error(err)
		 );

		this._postService.getPostsUnderCategory(id).subscribe(
			 data => { this.posts = data },
			 err => console.error(err)
		 );
	}
	gotoPost(post: Post) {
		let link = ['PostDetail', { id: post.id }];
		this._router.navigate(link);
	}
	createPostUnder(category: Category) {
		let link = ['PostEdit', { categoryId: category.id }];
		this._router.navigate(link);
	}
	goBack() {
		window.history.back();
	}

}
