import {Injectable} from 'angular2/core';
import {Response} from 'angular2/http';
import {Http} from 'angular2/http';
import {Headers} from 'angular2/http';
// import {Http} from '../common/http';
import {CATEGORIES} from '../model/mock-categories';
import {Category} from '../model/category';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
	constructor(private http:Http) {

	}
	getCategories() {
		let access_token =   localStorage.getItem('access_token');
		 var headers = new Headers();
		 headers.set('Authorization', 'bearer '+access_token);
		 headers.set('Accept', 'application/json');
	    return this.http.get('http://localhost:8080/api/category/all', { headers: headers })
	    .map(res => res.json());
	}

	getCategory(id: string) {
		return this.http.get('http://localhost:8080/api/category/'+id)
	    .map(res => res.json());
	}
}
