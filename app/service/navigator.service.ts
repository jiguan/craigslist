import { Type, Injectable } from 'angular2/core';
import { AppComponent } from '../controller/app.component';
import { Router } from 'angular2/router';

//http://blog.mgechev.com/2015/12/30/angular2-router-dynamic-route-config-definition-creation
@Injectable()
export class NavigatorService {

    constructor(private _router: Router) {
        this._router.subscribe((val) => {
            alert(val);
        })
      }


}
