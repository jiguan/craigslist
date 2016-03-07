import { ROUTER_DIRECTIVES, Route } from 'angular2/router';
import { Input, Component } from 'angular2/core';

@Component({
  selector: 'app-nav',
  directives: [ ROUTER_DIRECTIVES ],
  template: `
    <nav>
    {{routes.name}}
      <a *ngFor="#route of routes"
        [routerLink]=route.path>{{route.name}}&nbsp;
      </a>
    </nav>
  `
})
export class Navigator {
    @Input()
    routes: string[];

}
