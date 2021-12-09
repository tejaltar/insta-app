import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {

  constructor(private dataService: DataService) { 
    this.getPosts();
  }

  posts: any[] = [];
  comments;
  users;
  comment
  ngOnInit() {
    this.getComments();
    this.getUsers();
    setTimeout(() => this.getPosts(),1000)
  }

  getPosts() {
    // This function retrieves all posts and gets its comments and who made thode comments
    this.dataService.getComments().toPromise()
    .then((comments) => {
      this.dataService.getUsers().toPromise()
      .then((users)=> {
        this.dataService.getPosts().toPromise()
        .then((posts)=> {
          posts.forEach(post => {
            var postComments = comments.filter(comment => post.comments && post.comments.includes(comment.id))
            var postCommentsProcessed = []
            postComments.forEach(postComment => {
              var commentObj = {
                user: users.find(user => user.id === postComment.user),
                text: postComment.text
              }
              postCommentsProcessed.push(commentObj)
            });
            console.log(postComments)
            var postObj = {
              user: users.find(user => user.id === post.user),
              img: post.img,
              likes: post.likes.length,
              caption: post.caption,
              comments: postCommentsProcessed
            }
            this.posts.push(postObj);
          });
        })
      })
    })
  }

  getComments() {
    this.dataService.getComments().subscribe((comments) => {
      this.comments = comments;
    })
  }

  getUsers() {
    this.dataService.getUsers().subscribe((users) => {
      this.users = users;
    })
  }

}
