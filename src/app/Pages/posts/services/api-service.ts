import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { postsInterface } from './posts-interface';
import { commentsInterface } from './comments-interface';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/'

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<postsInterface[]>(this.apiUrl + 'posts').pipe(
    catchError(( err: HttpErrorResponse ) => {
      return throwError(() => err);
    })
  );
  }

  getSinglePost(id: string) {
    return this.http.get<postsInterface>(this.apiUrl + 'posts/' + id).pipe(
    catchError(( err: HttpErrorResponse ) => {
      return throwError(() => err);
    })
  );
  }

  getSinglePostComments(id: string) {
    return this.http.get<commentsInterface[]>(this.apiUrl + 'posts/' + id + '/comments').pipe(
    catchError(( err: HttpErrorResponse ) => {
      return throwError(() => err);
    })
  );
  }

  newPost(post: Pick<postsInterface, 'title' | 'body'>) {
    return this.http.post<postsInterface>(this.apiUrl + 'posts', post).pipe(
    catchError(( err: HttpErrorResponse ) => {
      return throwError(() => err);
    })
  );
  }

  updatePost(post: Pick<postsInterface, 'title' | 'body'>, id: string) {
    return this.http.put<postsInterface>(this.apiUrl + 'posts/' + id, post).pipe(
    catchError(( err: HttpErrorResponse ) => {
      return throwError(() => err);
    })
  );
  }

  deletePost(id: string) {
    return this.http.delete(this.apiUrl + 'posts/' + id).pipe(
    catchError(( err: HttpErrorResponse ) => {
      return throwError(() => err);
    })
  );
  }
}