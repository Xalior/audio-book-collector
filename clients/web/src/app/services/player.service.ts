import { Injectable } from '@angular/core';
import {} from 'Moment'

import { Book } from '../models'

@Injectable()
export class PlayerService {
  book: Book = JSON.parse(window.localStorage.getItem('book')) || new Book();
  chapter: number = JSON.parse(window.localStorage.getItem('chapter')) || 0;
  playing: boolean = JSON.parse(window.localStorage.getItem('playing')) ||false;
  autoplay: boolean = JSON.parse(window.localStorage.getItem('autoplay')) || true;
  seekForwardStep: number = JSON.parse(window.localStorage.getItem('seekForwardStep')) || 10;
  seekBackStep: number = JSON.parse(window.localStorage.getItem('seekBackStep')) || 30;

  currentTime: number;
  currentTimeReadable: string;
  duration: number = 0;
  durationReadable: string;

  player: HTMLAudioElement;

  Math: Math = Math;

  constructor() {
    window['player'] = this;
    this.player = new Audio();

    this.player.ontimeupdate=(ev) => {
      if(ev.type == 'timeupdate') {
        this.setCurrentTime(this.player.currentTime);
        var durationReadable = String(Math.floor(this.player.duration) % 60);
        if (durationReadable.length == 1) durationReadable = "0" + durationReadable;
        this.durationReadable = String(Math.floor(this.player.duration / 60)) + ":" + durationReadable;
      }
    };

    this.player.ondurationchange=(ev) => {
      console.debug('ondurationchange');
      if(ev.type=='durationchange') {
        this.duration = this.player.duration;
      }
    };

    this.player.onended=(ev) => {
      console.debug("PlayerService.onended()");
      this.playing = false;
      window.localStorage.setItem('playing', false.toString());
      if(this.autoplay) {
        this.nextChapter();
        this.play();
      }
    };

    this.setChapter(this.chapter, JSON.parse(window.localStorage.getItem('currentTime')) || 0);
  }

  setCurrentTime(currentTime: number) {
    this.currentTime = currentTime;
    window.localStorage.setItem('currentTime', currentTime.toString());

    var currentTimeReadable = String(Math.floor(currentTime) % 60);
    if(currentTimeReadable.length==1) {
      currentTimeReadable = "0"+currentTimeReadable;
    }

    this.currentTimeReadable = String(Math.floor(currentTime/60))+":"+currentTimeReadable;
  }

  playPause() {
    if(this.playing) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    this.playing = true;
    this.player.play();
    window.localStorage.setItem('playing', true.toString());
  }

  pause() {
    this.player.pause();
    this.playing = false;
    window.localStorage.setItem('playing', false.toString());
  }

  back() {
    console.log("seekBackStep");
    this.goTo(-1*this.seekBackStep);
  }

  forward() {
    console.log("seekForwardStep");
    this.goTo(this.seekForwardStep);
  }

  goTo(diff : number) {
    this.player.currentTime = this.player.currentTime + diff;
    this.setCurrentTime(this.player.currentTime);
  }

  set(book : Book) {
    this.book = book;
    window.localStorage.setItem('book', JSON.stringify(book));
    this.setChapter(0);
  }

  nextChapter() {
    console.debug("PlayerService.nextChapter()");
    return this.setChapter(this.chapter+1);
  }

  previousChapter() {
    console.debug("PlayerService.previousChapter()");
    return this.setChapter(this.chapter-1)
  }

  setChapter(chapter: number, currentTime: number = null) {
    console.debug("PlayerService.setChapter()");
    if((chapter > -1) && (chapter<this.book.chapters.length)) {
      this.chapter = chapter;
      window.localStorage.setItem('chapter', this.chapter.toString());
      this.player.src = this.book.chapters[this.chapter].track;
      this.player.load();
      if(currentTime != null) {
        this.player.currentTime = currentTime;
        this.setCurrentTime(currentTime);
      } else {
        console.log('setting 0');
        this.player.currentTime = 0;
        this.setCurrentTime(0);
      }
      if(this.playing) {
        this.player.play();
      }
      return true;
    }
    return false;
  }

}
