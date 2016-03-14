import {Injectable} from 'angular2/core';
import { USER } from '../model/mock-user';


@Injectable()
export class UserService {
	getUser(id: number) {
		return Promise.resolve(USER);
	}
}
