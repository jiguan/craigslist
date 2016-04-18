import {Injectable} from 'angular2/core';
import {AuthHttp} from '../common/authHttp';
import { Observable } from 'rxjs/Observable';
import {User} from '../model/user';

@Injectable()
export class UserService {
	user: User;

	constructor(private http:AuthHttp) { }
	getProfile():Observable<User>  {
		return this.http.get('http://localhost:8080/api/user/profile')
		.map(res => res.json()).do(
				user => {
					this.user = user;
				}
		);

	}

	getCurrentUsername(): string {
		return this.user.username;
	}

	getRole():Set<string> {
		return this.user.roles;
	}
}
