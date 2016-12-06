import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import {MomentModule} from 'angular2-moment';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  Number: NumberConstructor = Number;
  open: boolean = JSON.parse(window.localStorage.getItem('footerOpen')) || false;

  constructor(private playerService: PlayerService) {
  }

  togglePlayerMode() {
    this.open = !this.open;
    window.localStorage.setItem('footerOpen',this.open.toString());
  }

  back() {
    console.log('b');
    this.playerService.back();
  }

  forward() {
    this.playerService.forward();
  }

  playPause() {
    this.playerService.playPause();
  }

  nextChapter() {
    this.playerService.nextChapter();
  }

  previousChapter() {
    this.playerService.previousChapter();
  }

  ngOnInit() {
  }

}
