import { Component, OnInit } from 'angular2/core';
import { UserService } from './users.service'
import { ROUTER_DIRECTIVES } from 'angular2/router'
import { SpinnerComponent } from "../shared/spinner.component";


@Component({
    templateUrl: '/app/user/users.html',
    providers: [UserService],
    directives: [ROUTER_DIRECTIVES,SpinnerComponent]

})

export class UserComponent implements OnInit {
    isLoading: boolean;

    users
    constructor(private _user: UserService) { }

    ngOnInit() {
        this.isLoading = true;
        var self = this

        self._user.getUsers()
            .subscribe(users => {
                this.isLoading = false;
                self.users = users
                console.log(users)
            });

    }

    deleteUser(id){
        this._user.deleteUser(id)
        .subscribe(data=>{
            console.log(data)
        })
    }
}