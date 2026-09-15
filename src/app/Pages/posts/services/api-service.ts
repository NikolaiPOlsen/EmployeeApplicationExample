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

  getSinglePostComments(id:string) {
    return this.http.get<commentsInterface[]>(this.apiUrl + 'posts/' + id + '/comments');
  }
}
