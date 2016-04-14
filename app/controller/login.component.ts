import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";
import {LoginService} from "../service/login.service";
import {PublicPage} from "../router/securityRouter";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// https://github.com/springboot-angular2-tutorial/angular2-app/blob/master/src/app/components/login/LoginPage.ts

@Component({
  selector: 'login-page',
  templateUrl: 'app/view/login.component.html',
  styleUrls: ['app/view/login.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
// @PublicPage({
//   whenSignedIn: (router) => router.navigate(['/Home'])
// })
export class LoginComponent {

  constructor(private router:Router, private loginService: LoginService, private toastr: ToastsManager) {
  }

  login(email, password) {
    this.loginService.login(email, password)
    .subscribe(() => {
     this.router.navigate(['/Home']);
   }, this.handleError);

  }

   signup() {

   }

  handleError(error) {
    switch (error.status) {
      case 400:
            this.toastr.warning('Email or password is wrong.');
    }
  }

}
