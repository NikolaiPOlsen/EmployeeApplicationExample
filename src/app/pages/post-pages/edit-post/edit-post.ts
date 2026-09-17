import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service';
import { Router, ActivatedRoute } from '@angular/router';
import { postsInterface } from '../services/posts-interface';
import { PopUpService } from '../../../app-components/pop-up/services/pop-up-service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.html',
  styleUrl: './edit-post.scss',
  standalone: false,
})
export class EditPost implements OnInit {

  post: postsInterface | null = null;
  id: string = '';
  private router = inject(Router);

  constructor (
    private api: ApiService,
    private route: ActivatedRoute,
    private popUpService: PopUpService,
  ) {}

  handleUpdate(value: {title: string, body: string}) {
    this.api.updatePost(value, this.id).subscribe({
      next: (post) => {
        this.router.navigate(['/posts']);
      },
      error: (err: HttpErrorResponse) => {
        this.popUpService.isOpen(`Update failed: (error ${err.status})`, 'Could not save your changes. Please try again.');
      },
    })
  }

  getPostData(id: string) {
    this.api.getSinglePost(id).subscribe({
      next: (post) => {
        this.post = post
      },
      error: (err: HttpErrorResponse) => {
        this.popUpService.isOpen(`Retreaving post failed: (error ${err.status})`, 'Could not retreave the post. Please try again.');
      },
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
