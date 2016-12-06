import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MomentModule } from 'angular2-moment';

import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap'

import { AppComponent } from './app.component';

import { BookListComponent } from './book-list/book-list.component';
import { FooterComponent } from './footer/footer.component';

import { LibraryService } from './library.service'
import { PlayerService } from './player.service';
import { BookSummaryComponent } from './book-summary/book-summary.component'

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    FooterComponent,
    BookSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
//      { path: 'book/:id', component: BookDetailComponent },
      { path: '', component: BookListComponent }
    ]),
    MomentModule,
    ModalModule
  ],
  providers: [LibraryService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
