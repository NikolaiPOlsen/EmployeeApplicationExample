import { Routes } from '@angular/router';
import { Posts } from './posts';
import { DetailedPosts } from './detailed-posts/detailed-posts';
import { NewPost } from './new-post/new-post';
import { EditPost } from './edit-post/edit-post';

export const postsRoutes: Routes = [
  { path: '', component: Posts },
  { path: 'new-post', component: NewPost },
  { path: 'edit-post/:id', component: EditPost },
  { path: ':id', component: DetailedPosts },
];

