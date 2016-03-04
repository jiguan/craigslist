import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import { Category } from '../model/category';
import { CategoryDetailComponent } from './category-detail.component';
import { CategoryService } from '../service/category.service';

@Component({
	selector: 'my-categories',
	templateUrl: 'app/view/categories.component.html',
	styleUrls: ['app/view/categories.component.css'],
	directives: [CategoryDetailComponent]
})
export class CategoriesComponent implements OnInit {
	categories: Category[];
	selectedCategory: Category;
	constructor(private _router: Router, private _categoryService: CategoryService) { }
	gotoDetail() {
		let link = ['CategoryDetail', { id: this.selectedCategory.id }];
		this._router.navigate(link);
	}
	getCategories() {
		this._categoryService.getCategories().then(categories => this.categories = categories);
	}
	ngOnInit() {
		this.getCategories();
	}
	onSelect(category: Category) { this.selectedCategory = category; }
}
