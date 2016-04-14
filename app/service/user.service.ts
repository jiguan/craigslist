import {Injectable} from 'angular2/core';
import {AuthHttp} from '../common/authHttp';
import { Observable } from 'rxjs/Observable';
import {User} from '../model/user';

@Injectable()
export class UserService {
	constructor(private http:AuthHttp) { }
	getProfile():Observable<User>  {
		return this.http.get('http://localhost:8080/api/user/me')
		.map(res => res.json());
	}
}
