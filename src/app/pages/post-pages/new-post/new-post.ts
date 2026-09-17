import { Component, inject } from '@angular/core';
import { ApiService } from '../services/api-service';
import { Router } from '@angular/router';
import { PopUpService } from '../../../app-components/pop-up/services/pop-up-service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.html',
  styleUrl: './new-post.scss',
  standalone: false,
})
export class NewPost {

  private router = inject(Router);

  constructor (
    private api: ApiService,
    private popUpService: PopUpService,
  ) {}

  handleNewPost(value: { title: string, body: string }) {
    this.api.newPost(value).subscribe({
      next: (post) => {
            this.router.navigate(['/posts'])
      },
      error: (err: HttpErrorResponse) => {
        this.popUpService.isOpen(`New post failed: (error ${err.status})`, 'A new post could not be created. Please try again.');
      },
    });
  }

}
