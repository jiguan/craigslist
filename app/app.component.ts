import { Component, OnInit, provide } from 'angular2/core';
import { CategoryService } from './service/category.service';
import { UserService } from './service/user.service';
import { PostService } from './service/post.service';
import { LoginService } from './service/login.service';
import { ProfileComponent } from './controller/profile.component';
import { PostDetailComponent } from './controller/post-detail.component';
import { PostEditComponent } from './controller/post-edit.component';
import { RegisterComponent } from './controller/register.component';
import { DashboardComponent } from './controller/dashboard.component';
import { LoginComponent } from './controller/login.component';
import { AuthHttp } from './common/authHttp';
import { CategoryDetailComponent } from './controller/category-detail.component';
import { SecurityRouterOutlet } from './router/securityRouter';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {XHRBackend,RequestOptions,HTTP_PROVIDERS, ConnectionBackend } from 'angular2/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
	selector: 'my-app',
	templateUrl: 'app/view/app.component.html',
	styleUrls: ['app/view/app.component.css'],
	directives: [SecurityRouterOutlet, ROUTER_DIRECTIVES],
	providers: [
		 ToastsManager,
		ROUTER_PROVIDERS,
		HTTP_PROVIDERS,
		CategoryService,
		PostService,
		UserService,
		LoginService,
		provide(AuthHttp, {
   	useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) => new AuthHttp(backend, defaultOptions),
   	deps: [XHRBackend, RequestOptions]
 	})
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
			path: '/category/:id',
			name: 'CategoryDetail',
			component: CategoryDetailComponent
		},
		{
			path: '/post',
			name: 'PostEdit',
			component: PostEditComponent
		},
		{
			path: '/post/:id',
			name: 'PostDetail',
			component: PostDetailComponent
		},
		{
			path: '/user/posts',
			name: 'Profile',
			component: ProfileComponent
		},
		{
			path: '/user/register',
			name: 'Register',
			component: RegisterComponent
		}
])
export class AppComponent {
	signedIn: boolean = false;
	constructor(private _loginService: LoginService, private _toastr: ToastsManager) {
		this._loginService.signedIn.subscribe(signedIn => {
		   this.signedIn = signedIn;
		});
		this._loginService.refresh();
	}
	logout() {
		this._loginService.logout();
		if(!this.signedIn) {
			this._toastr.success('Log out successfully');
		} else {
			alert('nn');
		}

	}


	title = 'Tour of Heroes';

	handleError(error) {
	  switch (error.status) {
		case 400:
			  this._toastr.error('Email or password is wrong.');
	  }
	}
}
