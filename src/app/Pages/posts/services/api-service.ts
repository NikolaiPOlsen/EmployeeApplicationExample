import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { postsInterface } from './posts-interface';
import { commentsInterface } from './comments-interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/'

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<postsInterface[]>(this.apiUrl + 'posts');
  }

  getSinglePost(id: string) {
    return this.http.get<postsInterface>(this.apiUrl + 'posts/' + id);
  }

  getSinglePostComments(id: string) {
    return this.http.get<commentsInterface[]>(this.apiUrl + 'posts/' + id + '/comments');
  }

  newPost(post: Pick<postsInterface, 'title' | 'body'>) {
    return this.http.post<postsInterface>(this.apiUrl + 'posts', post);
  }

  updatePost(post: Pick<postsInterface, 'title' | 'body'>, id: string) {
    return this.http.put<postsInterface>(this.apiUrl + 'posts/' + id, post);
  }

  deletePost(id: string) {
    console.log("Running deletePost with id:", id);
    return this.http.delete(this.apiUrl + 'posts/' + id);
  }
}
