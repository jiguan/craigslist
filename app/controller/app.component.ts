import { Component} from 'angular2/core';
import { CategoryService } from '../service/category.service';
import { UserService } from '../service/user.service';
import { PostService } from '../service/post.service';
import { LoginService } from '../service/login.service';
import { WindowService } from '../service/window.service';
import { MyPostComponent } from './my-post.component';
import { PostDetailComponent } from './post-detail.component';
import { NewPostComponent } from './new-post.component';
import { RegisterComponent } from './register.component';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login.component';
import { CategoryDetailComponent } from './category-detail.component';
// import { Http as NgHttp} from '../common/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {HTTP_PROVIDERS, ConnectionBackend } from 'angular2/http';


@Component({
	selector: 'my-app',
	templateUrl: 'app/view/app.component.html',
	styleUrls: ['app/view/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS,
		HTTP_PROVIDERS,
		CategoryService,
		PostService,
		UserService,
		LoginService,
		WindowService,
		ConnectionBackend
		// NgHttp
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
			path: '/home',
			name: 'Dashboard',
			component: DashboardComponent,
		},
		{
			path: '/login',
			name: 'Login',
			component: LoginComponent,
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
		},
		{
			path: '/user/register',
			name: 'Register',
			component: RegisterComponent
		}
])
export class AppComponent {
	title = 'Tour of Heroes';
}
