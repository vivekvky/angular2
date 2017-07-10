import { Component, OnInit } from 'angular2/core';
import { UserService } from './users.service';
import { SpinnerComponent } from "./spinner.component";

@Component({
    templateUrl: '/app/posts.html',
    providers: [UserService],
    directives: [SpinnerComponent]

})
export class PostComponent implements OnInit {
    commentLoading: any;
    currentPost: any;
    isLoading: boolean;

    Posts: any;

    constructor(private _userservice: UserService) {

    }

    ngOnInit() {
        this.isLoading = true;
        this._userservice.getPosts()
            .subscribe(posts => {
                this.Posts = posts
                this.isLoading = false;
            })
    }

    select(post) {
        this.isLoading = true
        this.commentLoading = post;

        this._userservice.getComments(post.id)
            .subscribe(comments => {
                this.currentPost.comments = comments
                this.commentLoading = false;
            });
    }

    change(id){
        this._userservice.getFilerdComments(id)
             .subscribe(posts => {
                this.Posts = posts
                this.isLoading = false;
            })
    }

}
