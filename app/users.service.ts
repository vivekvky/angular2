import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
    url = "http://jsonplaceholder.typicode.com/users"
    constructor(private _http: Http) { }

    getUsers() {
        return this._http.get(this.url)
            .map(data => data.json())
    }

    addUser(posts) {
        return this._http.post(this.url, posts)
            .map(data => data.json());
    }

    getByUser(id) {
        return this._http.get(this.url + "/" + id)
            .map(data => data.json());
    }

}