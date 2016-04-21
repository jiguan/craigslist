import { Component } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';
import { Post } from '../model/post';
import { PostService } from '../service/post.service';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from 'angular2/common';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:8080/api/';

@Component({
	templateUrl: 'app/view/post-edit.component.html',
	    styleUrls: ['app/view/post-edit.component.css'],
		directives: [FILE_UPLOAD_DIRECTIVES, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass]
})

export class PostEditComponent {
     private uploader:FileUploader = new FileUploader({url: URL});


	post: Post = new Post();
		constructor(private _router: Router, private _routeParams: RouteParams, private _postService: PostService) {
		this.uploader.queueLimit = 6;
		let id = this._routeParams.get('id');
		if(id!==null) {
			this._postService.getPost(id).subscribe(
				 data => { this.post = data },
				 err => console.error(err)
			 );
		} else {
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
		console.log(this.uploader.queue);
	}
}
