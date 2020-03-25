import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(
    private http: HttpClient
  ) { }

  getAllPost(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getSinglePost(id) {
    return this.http.get(this.apiUrl + id);
  }
}
