import { Routes } from '@angular/router';
import { Posts } from './posts';
import { DetailedPosts } from './detailed-posts/detailed-posts';

export const postsRoutes: Routes = [
  { path: '', component: Posts },
  { path: ':id', component: DetailedPosts },
];

