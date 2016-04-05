import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";
import {LoginService} from "../service/login.service";


@Component({
  selector: 'login-page',
  templateUrl: 'app/view/login.component.html',
  styleUrls: ['app/view/login.component.css']
  // directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router:Router, private loginService: LoginService) {
  }

  login() {
    this.loginService.login(this.email, this.password);
    //   .subscribe(() => {
    //     this.router.navigate(['/home']);
    //   }, this.handleError)
    // ;
  }

  handleError(error) {
    switch (error.status) {
      case 401:
        console.error('Email or password is wrong.');
    }
  }

}
