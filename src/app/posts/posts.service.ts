import { Post } from './post.model';
import { Injectable } from '../../../node_modules/@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class PostsService {

  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>(); // A array of type Post is passed to subject class for improved logic in optimisation

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() { // creating a subject listener and sending the data as observables.
    return this.postsUpdated.asObservable();
  }

  addPost(title: String, content: String) {
    const post: Post = {title: title, content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]); // new updated copy of posts are added to the type subject array
  }


}
