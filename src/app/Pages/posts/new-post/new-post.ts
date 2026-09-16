import { Component, inject } from '@angular/core';
import { ApiService } from '../services/api-service';
import { Router } from '@angular/router';
import { PostForm } from '../components/post-form/post-form';

@Component({
  selector: 'app-new-post',
  imports: [PostForm],
  templateUrl: './new-post.html',
  styleUrl: './new-post.scss',
})
export class NewPost {

  private router = inject(Router);

  constructor (
    private api: ApiService,
  ) {}

  handleNewPost(value: { title: string, body: string }) {
    this.api.newPost(value).subscribe({
      next: (post) => console.log('Created post', post),
    });

    this.router.navigate(['/posts'])
  }

}
