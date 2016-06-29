// https://github.com/springboot-angular2-tutorial/angular2-app/blob/master/src/app/http/Http.ts
import {Observable} from "rxjs/Observable";
import {Injectable} from "angular2/core";
import {PublicPage} from "../router/securityRouter";
import { Http, RequestOptionsArgs, RequestOptions, Headers, Response, ConnectionBackend} from "angular2/http";


const mergeAuthToken = (options:RequestOptionsArgs) => {
  let newOptions = new RequestOptions({}).merge(options);
  let newHeaders = new Headers(newOptions.headers);
  let auth = JSON.parse(localStorage.getItem('auth'));
  if(auth!==null) {
      let access_token = auth.access_token;
      let token = auth.token_type+' '+ access_token;
      localStorage.setItem('token', token);
      newHeaders.set('Authorization', token);
      newHeaders.set('Accept', 'application/json');
      newHeaders.set('Content-Type', 'application/json');
  }
  newOptions.headers = newHeaders;
  return newOptions;
};

// @PublicPage({
//   whenSignedIn: (router) => router.navigate(['/Home'])
// })
@Injectable()
export class AuthHttp extends Http {
    constructor(_backend: ConnectionBackend, _defaultOptions: RequestOptions) {
        super(_backend, _defaultOptions);
    }
  get(url:string, options?:RequestOptionsArgs):Observable<Response> {
      return super.get(url, mergeAuthToken(options));
  }

  post(url:string, body:string, options?:RequestOptionsArgs):Observable<Response> {
    return super.post(url, body, mergeAuthToken(options));
  }

  put(url:string, body:string, options?:RequestOptionsArgs):Observable<Response> {
    return super.put(url, body, mergeAuthToken(options));
  }

  delete(url:string, options?:RequestOptionsArgs):Observable<Response> {
    return super.delete(url, mergeAuthToken(options));
  }

  patch(url:string, body:string, options?:RequestOptionsArgs):Observable<Response> {
    return super.patch(url, body, mergeAuthToken(options));
  }

  head(url:string, options?:RequestOptionsArgs):Observable<Response> {
    return super.head(url, mergeAuthToken(options));
  }

}
