import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MomentModule } from 'angular2-moment';

import { ModalModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap'

import { StoreModule } from '@ngrx/store';
import { BookReducer, UserReducer } from './models';

import { AppComponent } from './app.component';

import { BookListComponent } from './book-list/book-list.component';
import { FooterComponent } from './footer/footer.component';

import { LibraryService } from './services/library.service'
import { PlayerService } from './services/player.service';
import { UserService } from './services/user.service';
import { BookSummaryComponent } from './book-summary/book-summary.component';
import { NavComponent } from './nav/nav.component'

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    FooterComponent,
    BookSummaryComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: BookListComponent }
    ]),
    StoreModule.provideStore({
      books: BookReducer,
      user: UserReducer
    }),
    MomentModule,
    DropdownModule,
    ModalModule
  ],
  providers: [LibraryService, PlayerService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
