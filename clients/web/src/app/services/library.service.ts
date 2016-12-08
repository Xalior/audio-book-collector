import 'rxjs/add/operator/map';
import { Http, Headers, Response } from "@angular/http";
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import { ABCStore, Book } from '../models'

const BASE_URL = '/api/';
const API_PATH: string = 'books';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class LibraryService {
  private API_URL: string;
  public books: Observable<Book[]>;

  constructor(private http: Http, private store: Store<ABCStore>) {
    this.API_URL = BASE_URL + API_PATH + "/";
    this.books = store.select(state => state.books);
    this.loadBooks();
  }

  loadBooks() {
    this.http.get(this.API_URL)
      .map(res => res.json())
      .map(payload => ({ type: 'ADD_BOOKS', payload }))
      .subscribe(action => this.store.dispatch(action));

  }

  saveBook(book: Book) {
    (book.id) ? this.updateBook(book) : this.createBook(book);
  }

  createBook(book: Book) {
    this.http.post(`${this.API_URL}`, JSON.stringify(book), HEADER)
      .map(res => res.json())
      .map(payload => ({ type: 'CREATE_BOOK', payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  updateBook(book: Book) {
    this.http.put(`${this.API_URL}${book.id}`, JSON.stringify(book), HEADER)
      .subscribe(action => this.store.dispatch({ type: 'UPDATE_BOOK', payload: book }));
  }

  deleteBook(book: Book) {
    this.http.delete(`${this.API_URL}${book.id}`)
      .subscribe(action => this.store.dispatch({ type: 'DELETE_BOOK', payload: book }));
  }

}
