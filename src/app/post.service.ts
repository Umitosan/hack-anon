import { Injectable } from '@angular/core';
import { Post } from './post.model';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()

export class PostService {
  // posts: FirebaseListObservable<any[]>;
  posts: AngularFireList<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.posts = db.list('posts');
  }

  getPosts() {
    return this.posts.valueChanges();
  }

  // addPost(newPost: Post) {
  addPost(newPost: any) {
    // itemsRef.push({ name: newName });
    this.posts.push(newPost);
  }

  /*
  post model
  public title: string
  public body: string
  public author: string
  */

}
