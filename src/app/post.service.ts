import { Injectable } from '@angular/core';
import { Post } from './post.model';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()

export class PostService {
  // posts: FirebaseListObservable<any[]>;
  posts: AngularFireList<any[]>;
  // posts: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.posts = db.list('posts');
    // NOTE: db.list('posts')                is TYPE AngularFireList<any[]>
    // NOTE: db.list('posts').valueChanges() is TYPE  Observable<any[]>
  }

  getPosts() {
    return this.posts.valueChanges();
  }

  addPost(newPost: any) {
    // this.posts.push(newPost);
  }

  /*
  post model
  public title: string
  public body: string
  public author: string
  */

}
