import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Category } from '../model/category';
import { CategoryService } from '../service/category.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: 'app/view/dashboard.component.html',
	styleUrls: ['app/view/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	categories: Category[] = [];
	constructor(private _router: Router, private _categoryService: CategoryService) { }
	ngOnInit() {
		 this._categoryService.getCategories().subscribe(
			  data => { this.categories = data },
			  err => console.error(err)
		  );

	}
	gotoDetail(category: Category){
		let link = ['CategoryDetail', { id: category.id }];
		this._router.navigate(link);
	}
}
