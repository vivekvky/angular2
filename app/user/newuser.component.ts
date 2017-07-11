import { Component, OnInit } from 'angular2/core';
import { CanDeactivate, Router, RouteParams } from 'angular2/router';
import { ControlGroup, FormBuilder, Validators } from 'angular2/common';
import { CustomValidation } from '../shared/customvalidation'
import { UserService } from './users.service'
import { user } from "./properties.interface";
import { SpinnerComponent } from "../shared/spinner.component";

@Component({
    templateUrl: '/app/user/newuser.html',
    providers: [UserService],
    directives:[SpinnerComponent]
})

export class NewUserComponent implements OnInit, CanDeactivate {
    isLoading: boolean;
    asdf: any;
    data: any;
    user = new user()
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
            this.isLoading = true;
            this._userservice.getByUser(this.id)
            
                .subscribe(user => {
                this.isLoading = false
                this.user = user
            },
                response => {
                    if (response.status == 404) {
                        this._router.navigate(['NotFound']);
                    }
                });

        }


    }

    onSubmit() {
        if (this.id) {
            this._userservice.updateUser(this.id, this.user)
                .subscribe(data => {
                    console.log(data)
                    this.asdf = data
                })
        }
        else {
            this._userservice.addUser(this.user)
                .subscribe(data => {
                    console.log(data)
                    this.asdf = data
                })
        }



        //this._router.navigate(["Posts"]);
    }


}