import {Injectable} from 'angular2/core';
import { POSTS } from '../model/mock-post-car';
import { COMMENTS } from '../model/mock-comment';
import { Post } from '../model/post';

@Injectable()
export class PostService {
	getPostsUnder(categoryId: string) {
		return Promise.resolve(POSTS);
	}
	getPost(id: string) {
		return Promise.resolve(POSTS).
			then(posts => posts.filter(post => post.id === id)[0]);
	}

	getPostsOfUser(id: string) {
		return Promise.resolve(POSTS);
	}

	getCommentsOfPost(id: string) {
		return Promise.resolve(COMMENTS).then(cs => cs.filter(comment => comment.post === id));
	}
}
