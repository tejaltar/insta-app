import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  comments: Observable<any>;
  users: Observable<any>;
  posts: Observable<any>;

  constructor(private httpClient: HttpClient) {
    this.comments = this.httpClient.get('assets/comments.json')
    this.users = this.httpClient.get('assets/users.json')
    this.posts = this.httpClient.get('assets/posts.json')
  }

  getUsers(): Observable<any> {
    return this.users;
  }

  getPosts():Observable<any> {
    return this.posts;
  }

  getComments():Observable<any> {
    return this.comments;
  }
}
