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
import { Http } from '../common/http';
import { SecurityRouterOutlet } from '../router/securityRouter';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {HTTP_PROVIDERS, ConnectionBackend } from 'angular2/http';


@Component({
	selector: 'my-app',
	templateUrl: 'app/view/app.component.html',
	styleUrls: ['app/view/app.component.css'],
	directives: [SecurityRouterOutlet, ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS,
		HTTP_PROVIDERS,
		CategoryService,
		PostService,
		UserService,
		LoginService,
		WindowService,
		ConnectionBackend,
		Http
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
			name: 'Home',
			component: DashboardComponent,
		},
		{
			path: '/login',
			name: 'Login',
			component: LoginComponent,
		},
		{
			path: '/signup',
			name: 'Signup',
			component: LoginComponent,
		},
		{
			path: '/logout',
			name: 'Logout',
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
	constructor(private _loginService: LoginService) {}
	signedIn: boolean = this._loginService.isSignedIn();
	title = 'Tour of Heroes';
}
