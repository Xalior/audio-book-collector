import {Component, OnInit, Input} from '@angular/core';
import { Book } from '../models/book';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'book-summary',
  templateUrl: './book-summary.component.html',
  styleUrls: ['./book-summary.component.scss']
})

export class BookSummaryComponent implements OnInit {
  @Input() book: Book;

  constructor(private playerService: PlayerService) {
  }

  ngOnInit() {
  }

  quickPlay() {
    this.queue();
    this.playerService.play();
  }

  queue() {
    this.playerService.set(this.book);
  }

}
