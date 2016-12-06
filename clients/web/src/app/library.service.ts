import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class LibraryService {
  constructor(private http: Http) { }

  get() {
    return this.http.get('/api/books')
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}

export class Book {
  id: string = '';
  title: string = '';
  author: string = '';
  chapters: Array<any> = new Array();
  duration: number = 0; // in minutes
  description: string ='';
  cover: string = 'https://cheshirelibraryblog.files.wordpress.com/2013/11/cd.jpg';
  isDone: boolean = false;

}
