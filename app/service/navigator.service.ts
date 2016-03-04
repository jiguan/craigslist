import {Injectable} from 'angular2/core';

//http://blog.mgechev.com/2015/12/30/angular2-router-dynamic-route-config-definition-creation
@Injectable()
export class NavigatorService {

    constructor(private registry: RouteRegistry) {}
    getRoutes(component: Type) {
        return Reflect.getMetadata('annotations', component)
        .filter(a => {
            return a.constructor.name === 'RouteConfig';
        }).pop();
    }
    // Updates the metadata added by @RouteConfig associated
    // with given `component`
    updateRouteConfig(component: Type, routeConfig) {
        let annotations = Reflect.getMetadata('annotations', component);
        let routeConfigIndex = -1;
        for (let i = 0; i < annotations.length; i += 1) {
            if (annotations[i].constructor.name === 'RouteConfig') {
                routeConfigIndex = i;
                break;
            }
        }
        if (routeConfigIndex < 0) {
            throw new Error('No route metadata attached to the component');
        }
        annotations[routeConfigIndex] = routeConfig;
        Reflect.defineMetadata('annotations', annotations, AppCmp);
    }
    // Adds additional `route` to given `component`
    addRoute(component: Type, route) {
        let routeConfig = this.getRoutes(component);
        routeConfig.configs.push(route);
        this.updateRoutes(component, routeConfig);
        this.registry.config(component, route);
    }


}
