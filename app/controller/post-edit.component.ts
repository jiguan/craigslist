import { Component } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';
import { Post } from '../model/post';
import { PostService } from '../service/post.service';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from 'angular2/common';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload/ng2-file-upload';



@Component({
	templateUrl: 'app/view/post-edit.component.html',
	    styleUrls: ['app/view/post-edit.component.css'],
		directives: [FILE_UPLOAD_DIRECTIVES, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass]
})

export class PostEditComponent {

    private uploader:FileUploader;


	post: Post = new Post();
		constructor(private _router: Router, private _routeParams: RouteParams, private _postService: PostService) {


		let id = this._routeParams.get('id');
		if(id!==null) {
			//edit an existing post
			this._postService.getPost(id).subscribe(
				 data => { this.post = data },
				 err => console.error(err)
			 );
			 let saveFileUrl = 'http://localhost:8080/api/file/'+id;
			 //https://github.com/jkuri/ng2-uploader
 			this.uploader = new FileUploader({url: saveFileUrl, withCredentials: true, authToken: localStorage.getItem('token')});
		    this.uploader.queueLimit = 6;
		} else {
			//create a new post
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
		
	}
}
