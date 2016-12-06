import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Book } from '../models/book'

@Injectable()
export class LibraryService {
  private API_PATH: string = 'books';

  constructor(private http: Http) { }

  get(): Observable<Book[]> {
    return this.http.get('/api/'+this.API_PATH)
      .map((res:Response) => res.json() || [])
  }

  getSingleBook(id: string): Observable<Book> {
    return this.http.get(`${this.API_PATH}/${id}`)
      .map(res => res.json() || {})
  }
}
