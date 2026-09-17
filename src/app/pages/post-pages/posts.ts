import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from './services/api-service';
import { postsInterface } from './services/posts-interface';
import { RouterLink, Router } from '@angular/router';
import { ButtonsModule } from '../../app-components/buttons/buttons.module';

@Component({
  selector: 'app-posts',
  imports: [RouterLink, ButtonsModule],
  templateUrl: './posts.html',
  styleUrl: './posts.scss',
})
export class Posts implements OnInit {

  posts: postsInterface[] = [];
  private router = inject(Router);

  constructor (
    private api: ApiService,
  ) {}

  loadPosts() {
    this.api.getPosts().subscribe({
      next: (posts) => this.posts = posts,
    });
  }

  handleNewPost() {
    this.router.navigate(['posts/new-post']);
  }

  ngOnInit(): void {
    this.loadPosts();
  }
}
