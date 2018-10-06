import { Injectable } from '@angular/core';
import { Post } from './post.model';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()

export class PostService {
  posts: AngularFireList<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.posts = db.list('posts');
  }

  getPosts() {
    return this.posts.valueChanges();
  }

  addPost(newPost: Post) {
    // this.posts.push(newPost);
  }

}
