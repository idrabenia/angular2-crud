import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../user.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-list-user',
  templateUrl: 'list-user.component.html',
  styleUrls: ['list-user.component.css'],
  providers: [UserService]
})
export class ListUserComponent implements OnInit {

  users: any[] = [];

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.userService
      .query()
      .subscribe(
        res => this.users = res.json(),
        err => console.log(err)
      )
  }

  deleteUser(user) {
    this.userService
      .deleteUser(user._id)
      .subscribe(
        data => this.ngOnInit(),
        err => console.log(err)
      )
  }

}
