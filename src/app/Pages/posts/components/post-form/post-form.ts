import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Button } from '../../../../AppComponent/button/button';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { postsInterface } from '../../services/posts-interface';

@Component({
  selector: 'app-post-form',
  imports: [Button, ReactiveFormsModule],
  templateUrl: './post-form.html',
  styleUrl: './post-form.scss',
})
export class PostForm implements OnChanges{

  @Output() formSubmit = new EventEmitter<{ title: string, body: string }>();
  @Input() post: postsInterface | null = null;

    postForm = new FormGroup ({
    title: new FormControl('', {nonNullable:true, validators: [Validators.required]}),
    body: new FormControl('', {nonNullable:true, validators: [Validators.required]}),
  })

  onSubmit() {
    this.formSubmit.emit(this.postForm.getRawValue());
    this.postForm.reset();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['post'] && this.post) {
      this.postForm.patchValue({
        title: this.post.title,
        body: this.post.body,
      });
    }
  }
}
