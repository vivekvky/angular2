import { Component, OnInit } from 'angular2/core';
import { UserService } from './users.service'
import { ROUTER_DIRECTIVES } from 'angular2/router'


@Component({
    templateUrl: '/app/users.html',
    providers: [UserService],
    directives:[ROUTER_DIRECTIVES]
    
})

export class UserComponent implements OnInit {
    users
    constructor(private _user: UserService) { }

    ngOnInit() {
        var self = this

        self._user.getUsers()
            .subscribe(users => {
                self.users = users
                console.log(users)
            });
    }
}