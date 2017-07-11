import { Component, OnInit } from 'angular2/core';
import { UserService } from '../user/users.service';
import { SpinnerComponent } from "../shared/spinner.component";

@Component({
    templateUrl: '/app/posts/posts.html',
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
        this.currentPost = [];
        this.isLoading = true;
        this._userservice.getPosts()
            .subscribe(posts => {
                this.Posts = posts
                this.isLoading = false;
            })
    }

    select(post) {
        this.currentPost = post;
        this.commentLoading = true;
        this._userservice.getComments(post.id)
            .subscribe(comments => {
                this.currentPost.comments = comments
                this.commentLoading = false;
            });
    }

}
