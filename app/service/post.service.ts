import {Injectable} from 'angular2/core';
import { POSTS } from '../model/mock-post-car';
import { COMMENTS } from '../model/mock-comment';
import { Post } from '../model/post';
import {Response} from 'angular2/http';
import {AuthHttp} from '../common/authHttp';

@Injectable()
export class PostService {
	constructor(private http:AuthHttp) { }
	getPostsUnder(categoryId: string) {
		return this.http.get('http://localhost:8080/api/category/'+categoryId+'/posts/')
	    .map(res => res.json());
	}
	getPost(id: string) {
		return this.http.get('http://localhost:8080/api/post/'+id)
	    .map(res => res.json());
	}

	getPostsOfUser(userId: string) {
		return Promise.resolve(POSTS);
	}

	getCommentsOfPost(id: string) {
		return Promise.resolve(COMMENTS);
		// return this.http.get('http://localhost:8080/api/post/'+id+'/comments/')
	    // .map(res => res.json());
	}
}
