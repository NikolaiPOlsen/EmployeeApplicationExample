import { Component, inject, OnInit } from '@angular/core';
import { PostForm } from '../components/post-form/post-form';
import { ApiService } from '../services/api-service';
import { Router, ActivatedRoute } from '@angular/router';
import { postsInterface } from '../services/posts-interface';

@Component({
  selector: 'app-edit-post',
  imports: [PostForm],
  templateUrl: './edit-post.html',
  styleUrl: './edit-post.scss',
})
export class EditPost implements OnInit {

  post: postsInterface | null = null;
  id: string = '';
  private router = inject(Router);

  constructor (
    private api: ApiService,
    private route: ActivatedRoute,
  ) {}

  handleUpdate(value: {title: string, body: string}) {
    this.api.updatePost(value, this.id).subscribe({
      next: (post) => console.log('Updated post: ', post)
    })
    this.router.navigate(['/posts']);
  }

  getPostData(id: string) {
    this.api.getSinglePost(id).subscribe({
      next: (post) => this.post = post,
    })
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = id
      this.getPostData(id);
    }
  }
}
