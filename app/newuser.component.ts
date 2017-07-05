import { Component, OnInit } from 'angular2/core';
import { CanDeactivate, Router, RouteParams } from 'angular2/router';
import { ControlGroup, FormBuilder, Validators } from 'angular2/common';
import { CustomValidation } from './customvalidation'
import { UserService } from './users.service'

@Component({
    templateUrl: '/app/newuser.html',
    providers: [UserService]
})

export class NewUserComponent implements OnInit, CanDeactivate {
    asdf: any;
    data: any;
    user = {
        address: {}
    };
    title;
    id
    form: ControlGroup;
    constructor(
        private fb: FormBuilder,
        private _router: Router,
        private _userservice: UserService,
        private _routeParams: RouteParams
    ) {
        this.form = fb.group({
            username: ['', Validators.compose([Validators.required])],
            email: ['', Validators.compose([Validators.required, CustomValidation.email])],
            mobile: ['', Validators.compose([Validators.required])],
            address: fb.group({
                street: [],
                suit: [],
                city: [],
                zip: []
            })
        })
    }

    routerCanDeactivate(next, previous) {
        if (this.form.dirty)
            return confirm("Are you sure you want to navigate?");
    }

    ngOnInit() {
        this.id = this._routeParams.get("id");
        this.title = this.id ? "Edit" : "New";

        if (!this.id) {
            return
        }
        else {
            this._userservice.getByUser(this.id)
                .subscribe(data => {
                    this.user = data.data
                })
        }


    }

    onSubmit(posts) {
        this._userservice.addUser(posts)
            .subscribe(data => {
                console.log(data)
                this.asdf = data;
            })


        //this._router.navigate(["Posts"]);
    }


}