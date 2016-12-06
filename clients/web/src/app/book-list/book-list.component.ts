import { Component, OnInit, OnChanges } from '@angular/core';

import { LibraryService, Book } from '../library.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnChanges {
  private books: Book[];
  private activeBooks: number = 0;

  constructor(private libraryService: LibraryService, private playerService: PlayerService) { }

  getBooks(){
    console.log('getBooks');
    return this.libraryService.get().subscribe(
      books => {
        this.books = books;
        this.activeBooks = this.books.filter(book => book.isDone).length;
      }
    );
  }

  playBook(book: Book) {
    this.playerService.set(book)
  }

  ngOnInit() {
    this.getBooks();
  }

  ngOnChanges(changes:any) {
    // Listen to the 'list'emitted event so as populate the model
    // with the event payload
    console.log('ngOnChanges');
    this.libraryService.get().subscribe((books:Book[]) => { this.getBooks()});
  }

}
