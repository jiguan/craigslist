import {Injectable} from "angular2/core";
import {Response, Http} from "angular2/http";
import { Observable } from 'rxjs/Observable';
import {Headers} from 'angular2/http';
// import {Http} from "../common/http";

// https://github.com/springboot-angular2-tutorial/angular2-app/blob/master/src/app/services/LoginService.ts

@Injectable()
export class LoginService {

  constructor(private http:Http) {
  }



  login(username, password){
      var clientId = 'clientapp';
      var clientSecret = '123456';
      var creds = this.createAuthorizationHeader(clientId, clientSecret);
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Accept', 'application/json');
      headers.append('Authorization', 'Basic '+creds);

      var body: string = 'grant_type=password&username='+username+'&password='+password;
      console.log(body);
     return  this.http.post('http://localhost:8080/oauth/token', body, { headers: headers })
     .subscribe(
         response => {
              localStorage.setItem('jwt', response.json().id_token);

    },
    error => {
          console.log(error);
        }
    );


   // subscribe(resp => {
   //     localStorage.setItem('jwt', resp.headers.get('X-AUTH-TOKEN'));
   //   });
  }

  createAuthorizationHeader(username, password): string {
      return btoa(username+':'+password);
   }

  saveJwt(jwt) {
  if(jwt) {
    localStorage.setItem('id_token', jwt)
  }
}

  logout():void {
    localStorage.removeItem('jwt');
  }

  isSignedIn():boolean {
    return localStorage.getItem('jwt') !== null;
  }

}
