import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api-service';
import { postsInterface } from '../services/posts-interface';
import { commentsInterface } from '../services/comments-interface';
import { ButtonsModule } from '../../../app-components/buttons/buttons.module';

@Component({
  selector: 'app-detailed-posts',
  templateUrl: './detailed-posts.html',
  styleUrl: './detailed-posts.scss',
  standalone: false,
})
export class DetailedPosts implements OnInit {

  @Output() idForEdit = new EventEmitter();

    post: postsInterface | null = null;
    comments: commentsInterface[] = [];
    private router = inject(Router);

  constructor (
    private api: ApiService,
    private route: ActivatedRoute,
  ) {}

  loadSinglePost(id: string) {
    this.api.getSinglePost(id).subscribe({
      next: (post) => this.post = post,
    });
    this.api.getSinglePostComments(id).subscribe({
      next: (comments) => this.comments = comments,
    });
  }

  handleUpdate(id: string) {
    this.idForEdit.emit(id)
    this.router.navigate(['posts/edit-post/' + id])
  }

  handleDelete(id: string) {
    this.api.deletePost(id).subscribe({
      next: () => this.router.navigate(['/posts'])
    })
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadSinglePost(id);
    }
  }
}
