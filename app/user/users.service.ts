import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
    url = "http://jsonplaceholder.typicode.com/"
    constructor(private _http: Http) { }

    getUsers() {
        return this._http.get(this.url + "users")
            .map(data => data.json())
    }
    getFilerdComments() {
        return this._http.get(this.url + "users")
            .map(data => data.json())
    }

    addUser(posts) {
        return this._http.post(this.url + "users", JSON.stringify(posts))
            .map(data => data.json());
    }
    updateUser(id, posts) {
        return this._http.put(this.url + "users/" + id, JSON.stringify(posts))
            .map(data => data.json());
    }
    deleteUser(id) {
        return this._http.delete(this.url + "users/" + id)
            .map(data => data.json());
    }
    getByUser(id) {
        return this._http.get(this.url + "users/"  + id)
            .map(data => data.json());
    }

    getPosts() {
        return this._http.get(this.url + "posts")
            .map(data => data.json());
    }

    getComments(postId){
		return this._http.get(this.url + "posts/" + postId + "/comments")
			.map(res => res.json());
	}

}