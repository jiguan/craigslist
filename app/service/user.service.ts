import {Injectable, OnInit} from 'angular2/core';
import {AuthHttp} from '../common/authHttp';
import { Observable } from 'rxjs/Observable';
import {User} from '../model/user';

@Injectable()
export class UserService {
	private user: User = new User();

	constructor(private http:AuthHttp) {}

	public loadProfile(): Observable<User> {
		return this.http.get('http://localhost:8080/api/user/profile')
		.map(res => res.json())
		.do (
   			user => {
				this.user = user;
				console.log("set user");
				console.log(user);
			}
   		);
	}

	public getCurrentUser(): User {
		return this.user;
	}

	public isPoster():boolean {
		return this.user.roles.has('POSTER');
	}
}
