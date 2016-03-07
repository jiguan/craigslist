import { Component} from 'angular2/core';
import { CategoryService }     from '../service/category.service';
import { NavigatorService }     from '../service/navigator.service';
import { PostService } from '../service/post.service';
import { Navigator } from "./navigator.component";
import { CategoriesComponent } from './categories.component';
import { PostDetailComponent } from './post-detail.component';
import { NewPostComponent } from './new-post.component';
import { DashboardComponent } from './dashboard.component';
import { CategoryDetailComponent } from './category-detail.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteRegistry, Route } from 'angular2/router';


@Component({
	selector: 'app',
	template: `
	<h1>{{title}}</h1>
	<app-nav [routes]="appRoutes"></app-nav>
	<router-outlet></router-outlet>
	`,
	styleUrls: ['app/view/app.component.css'],
	directives: [ ROUTER_DIRECTIVES, Navigator ],
	providers: [
		ROUTER_PROVIDERS,
		CategoryService,
		PostService,
		NavigatorService
	]
})
@RouteConfig([{
	path: '/categories',
	name: 'Categories',
	component: CategoriesComponent
},
{
	path: '/dashboard',
	name: 'Dashboard',
	component: DashboardComponent,
	useAsDefault: true
},
// {
// 	path: '/category/:id',
// 	name: 'CategoryDetail',
// 	component: CategoryDetailComponent
// },
{
	path: '/post',
	name: 'NewPost',
	component: NewPostComponent
},
// {
// 	path: '/post/:id',
// 	name: 'PostDetail',
// 	component: PostDetailComponent
// }
])
export class AppComponent {
	title = 'Tour of Heroes';
	appRoutes: string[][];
	constructor(private navigatorService: NavigatorService) {
    this.appRoutes = this.getAppRoutes();
    // setTimeout(_ => {
    //   let route = { path: '/post', component: NewPostComponent, as: 'About' };
    //   this.navigatorService.addRoute(this.constructor, route);
    //   this.appRoutes = this.getAppRoutes();
    // }, 1000);
  }
  private getAppRoutes(): string[][] {
    return this.navigatorService
      .getRoutes(this.constructor).configs.map(route => {
        return { path: [`/${route.name}`], name: route.name };
      });
  }
}
