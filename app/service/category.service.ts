import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Headers, Response} from 'angular2/http';
import {AuthHttp} from '../common/authHttp';
import { Observable } from 'rxjs/Observable';
import {CATEGORIES} from '../model/mock-categories';
import {Category} from '../model/category';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

	constructor(private http:AuthHttp) {
	}
	getCategories():Observable<Category[]>  {
	    return this.http.get('http://localhost:8080/api/category').map(res => res.json());
	}

	getCategory(id: string):Observable<Category> {
		return this.http.get('http://localhost:8080/api/category/'+id)
	    .map(res => res.json());
	}
}
