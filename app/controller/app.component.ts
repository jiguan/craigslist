import { Component} from 'angular2/core';
import { CategoryService } from '../service/category.service';
import { UserService } from '../service/user.service';
import { PostService } from '../service/post.service';
import { MyPostComponent } from './my-post.component';
import { PostDetailComponent } from './post-detail.component';
import { NewPostComponent } from './new-post.component';
import { DashboardComponent } from './dashboard.component';
import { CategoryDetailComponent } from './category-detail.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';


@Component({
	selector: 'my-app',
	templateUrl: 'app/view/app.component.html',
	styleUrls: ['app/view/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS,
		CategoryService,
		PostService,
		UserService
	]
})
@RouteConfig([
		{
			path: '/dashboard',
			name: 'Dashboard',
			component: DashboardComponent,
			useAsDefault: true
		},
		{
			path: '/category/:id',
			name: 'CategoryDetail',
			component: CategoryDetailComponent
		},
		{
			path: '/post',
			name: 'NewPost',
			component: NewPostComponent
		},
		{
			path: '/post/:id',
			name: 'PostDetail',
			component: PostDetailComponent
		},
		{
			path: '/user/posts',
			name: 'MyPost',
			component: MyPostComponent
		}
])
export class AppComponent {
	title = 'Tour of Heroes';
}
