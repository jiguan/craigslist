import {Injectable} from 'angular2/core';
import {CATEGORIES} from '../model/mock-categories';
import {Category} from '../model/category';

@Injectable()
export class CategoryService {
	getCategories() {
		return Promise.resolve(CATEGORIES);
	}
	getCategoriesSlowly() {
		  return new Promise<Category[]>(resolve =>
			setTimeout(()=>resolve(CATEGORIES), 2000) // 2
					    );
	}
	getCategory(id: string) {
		return Promise.resolve(CATEGORIES).
			then(categories => categories.filter(category => category.id === id)[0]);
	}
}
