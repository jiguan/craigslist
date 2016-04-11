import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";
import {LoginService} from "../service/login.service";
// https://github.com/springboot-angular2-tutorial/angular2-app/blob/master/src/app/components/login/LoginPage.ts

@Component({
  selector: 'login-page',
  templateUrl: 'app/view/login.component.html',
  styleUrls: ['app/view/login.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent {
  constructor(private router:Router, private loginService: LoginService) {
  }

  login(email, password) {
    this.loginService.login(email, password)
    .subscribe(() => {
     this.router.navigate(['/Home']);
   }, this.handleError);

  }

   logout() {
       this.loginService.logout().
       subscribe(
           response => {
               console.log(response);
               alert(response);
           },
           error => {
               alert(error);
           }
       );
   }

   signup() {

   }

  handleError(error) {
    switch (error.status) {
      case 401:
        console.error('Email or password is wrong.');
    }
  }

}
