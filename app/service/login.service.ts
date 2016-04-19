import {Injectable} from "angular2/core";
import {Response, Http, Headers} from "angular2/http";
import { Observable } from 'rxjs/Observable';
import { UserService } from '../service/user.service';
import 'rxjs/add/operator/do'
import { User } from '../model/user';
import { BehaviorSubject } from 'rxjs/Rx';
// import {Http} from "../common/http";

// https://github.com/springboot-angular2-tutorial/angular2-app/blob/master/src/app/services/LoginService.ts

@Injectable()
export class LoginService {

  public signedIn: BehaviorSubject<boolean> =  new BehaviorSubject<boolean>(false);

  constructor(private http:Http, private userService: UserService) {
  }



  login(username, password): Observable<User> {
      var clientId = 'clientapp';
      var clientSecret = '123456';
      var creds = this.createAuthorizationHeader(clientId, clientSecret);
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Authorization', 'Basic '+creds);
      let body: string = 'password='+password+'&username='+username+'&grant_type=password';

      return this.http.post('http://localhost:8080/oauth/token', body, { headers: headers })
      .do(
          resp => {
               var json = resp.json();
               json['timestamp'] = new Date().getTime();
               localStorage.setItem('auth', JSON.stringify(json));
               this.signedIn.next(true);
           }
     )
     .flatMap(() => this.userService.loadProfile())
     ;
  }

  createAuthorizationHeader(username, password): string {
      return btoa(username+':'+password);
   }

  logout():Observable<Response> {

      return this.http.post('http://localhost:8080/oauth/revoke-token', '')
      .do(
          resp => {
              localStorage.removeItem('auth');
              this.signedIn.next(false);
           }
     );
  }
  refresh(): void {
      let auth = JSON.parse(localStorage.getItem('auth'));
      if(auth !== null && (new Date().getTime() < auth.timestamp + auth.expires_in*1000)) {
          this.signedIn.next(true);
      }  else {
          this.signedIn.next(false);
          localStorage.removeItem('auth');
      }
    }


}
