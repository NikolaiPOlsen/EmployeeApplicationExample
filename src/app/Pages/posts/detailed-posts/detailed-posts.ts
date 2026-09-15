import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api-service';
import { postsInterface } from '../services/posts-interface';
import { commentsInterface } from '../services/comments-interface';

@Component({
  selector: 'app-detailed-posts',
  imports: [],
  templateUrl: './detailed-posts.html',
  styleUrl: './detailed-posts.scss',
})
export class DetailedPosts implements OnInit, OnDestroy{

    post: postsInterface | null = null;
    comments: commentsInterface[] = [];

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

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadSinglePost(id);
    }
  }

  ngOnDestroy(): void {
    
  }

}
