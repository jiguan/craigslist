import {Injectable} from "angular2/core";
import {Router} from "angular2/router";
import {LoginService} from "./login.service";
// https://github.com/springboot-angular2-tutorial/angular2-app/blob/master/src/app/services/ErrorHandler.ts
const toastr = require('toastr');
toastr.options.preventDuplicates = true;

@Injectable()
export class HttpErrorHandler {

  constructor(private router:Router,
              private loginService:LoginService) {
  }

  handle(error:any) {
    if (error.status === 401) {
      toastr.error('Please sign in');
      this.loginService.logout();
      this.router.navigate(['/Login']);
    }
  }

}
