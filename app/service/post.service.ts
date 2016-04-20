import {Injectable} from 'angular2/core';
import { COMMENTS } from '../model/mock-comment';
import { Post } from '../model/post';
import {Response} from 'angular2/http';
import {AuthHttp} from '../common/authHttp';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { BehaviorSubject } from 'rxjs/Rx';


@Injectable()
export class PostService {
	constructor(private http:AuthHttp, private userService: UserService) { }
	getPostsUnderCategory(id: string):Observable<[Post]> {
		return this.http.get('http://localhost:8080/api/category/'+id+'/posts')
	    .map(res => res.json());
	}
	getPost(id: string) {
		return this.http.get('http://localhost:8080/api/post/'+id)
	    .map(res => res.json());
	}

	savePost(post: Post): Observable<Post> {
		if(post.id!==null) {
			return this.http.put('http://localhost:8080/api/post/'+post.id, JSON.stringify(post)).map(resp => resp.json());
		} else {
			return this.http.post('http://localhost:8080/api/post/new', JSON.stringify(post)).map(resp => resp.json());
		}
	}
	deletePost(post: Post): Observable<Response> {
		return this.http.delete('http://localhost:8080/api/post/'+post.id);
	}

	addComment(comment: Comment): Observable<Comment> {
		return this.http.post('http://localhost:8080/api/post/comment/new', JSON.stringify(comment)).map(resp => resp.json());
	}

	getPostsOfUser(userId: string):Observable<Post[]> {
		let username = this.userService.getCurrentUser().username;
		return this.http.get('http://localhost:8080/api/user/'+username+'/posts')
		.map(resp => resp.json());
	}

	getCommentsOfPost(id: string) {
		return this.http.get('http://localhost:8080/api/post/'+id+'/comments')
	    .map(res => res.json());
	}
}
