import {Injectable} from "angular2/core";
import {Response, Http} from "angular2/http";
import { Observable } from 'rxjs/Observable';
import {Headers} from 'angular2/http';
import 'rxjs/add/operator/do'
// import {Http} from "../common/http";

// https://github.com/springboot-angular2-tutorial/angular2-app/blob/master/src/app/services/LoginService.ts

@Injectable()
export class LoginService {


  constructor(private http:Http) {
  }



  login(username, password): Observable<Response> {
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
               console.log(resp);
               localStorage.setItem('access_token', resp.json().access_token);
           }
     );
  }

  createAuthorizationHeader(username, password): string {
      return btoa(username+':'+password);
   }

  logout():Observable<Response> {
      if(this.isSignedIn()) {
          return this.http.post('http://localhost:8080/oauth/revoke-token', '');
      }
       localStorage.removeItem('access_token');
  }

  isSignedIn():boolean {
    return localStorage.getItem('access_token') !== null;
  }

}
