import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Category } from '../model/category';
import { CategoryService } from '../service/category.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
	selector: 'my-dashboard',
	templateUrl: 'app/view/dashboard.component.html',
	styleUrls: ['app/view/dashboard.component.css']
})
export class DashboardComponent {
	categories: Category[] = [];
	constructor(private _router: Router, private _categoryService: CategoryService, private toastr: ToastsManager) {
		this._categoryService.getCategories().subscribe(
   		  data => { this.categories = data },
   		  err => this.handleError(err));
   }
	gotoDetail(category: Category){
		let link = ['CategoryDetail', { id: category.id }];
		this._router.navigate(link);
	}

	handleError(error) {
      switch (error.status) {
        case 401:
              this.toastr.warning('Did you login?');
      }
    }
}
