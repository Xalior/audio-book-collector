import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};

  constructor(private userService: UserService) {


  }
  //
  // public toggled(open:boolean):void {
  //   console.log('Dropdown is now: ', open);
  // }

  public toggleDropdown($event:MouseEvent):void {
    console.log('toggleDropdown');
    $event.preventDefault();
    $event.stopPropagation();
   this.status.isopen = !this.status.isopen;
  }

  public preventClose($event:MouseEvent):boolean {
    console.log('preventClose');
    console.log($event);

    $event.preventDefault();
    $event.stopPropagation();
    return false;
  }
  public debug(stuff:any):void {
    console.log('debug');
    console.log(stuff);
  }

  ngOnInit() {
  }

  /*

   $('.dropdown input, .dropdown label').click(function(e) {
   e.stopPropagation();
   });

   */

}
