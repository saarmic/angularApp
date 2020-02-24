
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe((posts: any) => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    const post: any = { title: input.value };
    input.value = '';

    this.service.create(post)
      .subscribe(
        (newPost: any) => {
          post.id = newPost.id;
          this.posts.splice(0, 0, post);
        },
        (error) => {
          throw error;
          // if (error instanceof BadInput) {
          //   // this.form.setErrors(error.originalError);
          // }
          // else throw error;
        });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
  }

  deletePost(post) {
    this.service.delete(post.id)
      .subscribe(
        () => {
          const index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error) => {
          // if (error instanceof NotFoundError) {
          //   alert('This post has already been deleted.');
          // }
          // else { throw error; }
          throw error;
        });
  }
}
