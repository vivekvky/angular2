import { Component } from 'angular2/core'
import { ROUTER_DIRECTIVES,RouterLink,Router } from 'angular2/router'


@Component({
    selector: 'nav-bar',
    templateUrl: '/app/nav-bar.html',
    directives: [ROUTER_DIRECTIVES,RouterLink]
})



export class NavbarComponent {
constructor(private _router:Router){

}

isCurrentRoute(route){
        var instruction = this._router.generate(route);
        return this._router.isRouteActive(instruction);
    }
}