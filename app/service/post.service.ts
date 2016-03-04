import {Injectable} from 'angular2/core';
import {POSTS} from '../model/mock-post-car';
import { Post } from '../model/post';

@Injectable()
export class PostService {
	getPosts(categoryId: number) {
		return Promise.resolve(POSTS);
	}
	getPost(id: number) {
		return Promise.resolve(POSTS).
			then(posts => posts.filter(post => post.id === id)[0]);
	}
}
