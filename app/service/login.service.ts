import {Injectable} from "angular2/core";
import {Response, Http, Headers} from "angular2/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do'
import { BehaviorSubject } from 'rxjs/Rx';
// import {Http} from "../common/http";

// https://github.com/springboot-angular2-tutorial/angular2-app/blob/master/src/app/services/LoginService.ts

@Injectable()
export class LoginService {

  public signedIn: BehaviorSubject<boolean> =  new BehaviorSubject<boolean>(false);

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
                this.signedIn.next(true);
           }
     );
  }

  createAuthorizationHeader(username, password): string {
      return btoa(username+':'+password);
   }

  logout():Observable<Response> {

      return this.http.post('http://localhost:8080/oauth/revoke-token', '')
      .do(
          resp => {
              localStorage.removeItem('access_token');
              this.signedIn.next(false);
           }
     );
  }
  refresh(): void {
      if(localStorage.getItem('access_token') !== null) {
          this.signedIn.next(true);
      }  else {
          this.signedIn.next(false);
      }
    }


}
