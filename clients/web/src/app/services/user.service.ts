import { Http, Headers } from "@angular/http";
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import { ABCStore, User } from '../models'

const BASE_URL = '/api/';
const API_PATH: string = 'user';

@Injectable()
export class UserService {
  private API_URL: string;
  public user: Observable<User>;


  constructor(private http: Http, private store: Store<ABCStore>) {
    this.API_URL = BASE_URL + API_PATH + "/";
    this.user = store.select(state => state.user);
    this.checkUser();
  }

  checkUser() {
    this.http.get(this.API_URL)
      .map(res => res.json())
      .map(payload => ({ type: 'SET_USER', payload }))
      .subscribe(action => this.store.dispatch(action));

  }

}
