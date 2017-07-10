import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router'

import { NavbarComponent, } from './navbar.component';
import { UserComponent } from './users.component'
import { PostComponent } from './posts.component'
import { HomeComponent } from './home.component'
import { NewUserComponent } from './newuser.component'
import { NotFoundComponent } from './notfound.component'


@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/users', name: 'Users', component: UserComponent },
    { path: '/users/newuser', name: 'NewUser', component: NewUserComponent },
    { path: '/users/:id', name: 'EditUser', component: NewUserComponent },
    { path: '/posts', name: 'Posts', component: PostComponent },
    { path: '**', name: 'NotFound', component: NotFoundComponent },
    // { path: '/other', name: 'Other', redirectTo: ['Users'] }
])

@Component({
    selector: 'my-appp',
    template: `<nav-bar></nav-bar>
    <div class="container">
    <router-outlet></router-outlet>
    </div>
    `,
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})




export class ApppComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}