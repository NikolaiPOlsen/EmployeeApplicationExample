import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from './services/api-service';
import { postsInterface } from './services/posts-interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-posts',
  imports: [RouterLink],
  templateUrl: './posts.html',
  styleUrl: './posts.scss',
})
export class Posts implements OnInit, OnDestroy{

  posts: postsInterface[] = [];

  constructor (
    private api: ApiService,
  ) {}

  loadPosts() {
    this.api.getPosts().subscribe({
      next: (posts) => this.posts = posts,
    });
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  ngOnDestroy(): void {
  }
}
