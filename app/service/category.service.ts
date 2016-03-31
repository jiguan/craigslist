import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {CATEGORIES} from '../model/mock-categories';
import {Category} from '../model/category';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
	constructor(private http:Http) { }
	getCategories() {
	    return this.http.get('http://localhost:8080/api/category/')
	    .map(res => res.json());
	}

	getCategory(id: string) {
		return this.http.get('http://localhost:8080/api/category/'+id)
	    .map(res => res.json());
	}
}
