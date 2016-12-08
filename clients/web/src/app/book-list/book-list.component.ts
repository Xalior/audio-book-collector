import { Component, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { LibraryService } from '../services/library.service';
import { PlayerService } from '../services/player.service';
import { Book } from '../models/book';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  books: Book[];

  constructor(private libraryService: LibraryService, private playerService: PlayerService) {
    this.libraryService.books.subscribe(books => this.books = books);
  }

  playBook(book: Book) {
    this.playerService.set(book)
  }
}
