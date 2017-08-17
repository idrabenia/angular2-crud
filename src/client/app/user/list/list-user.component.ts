import { Component, OnInit, ViewContainerRef, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { UserService } from './../user.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import { ConfirmationDialogComponent } from './../../shared/confirmation-dialog/index';

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

  @ViewChild('deleteDialog')
  deleteDialog: ConfirmationDialogComponent;

  users: any[] = [];
  isListState: boolean;

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.isListState = this.checkListState(router.url);

    this.onNavigationStart(event => {
      this.ngOnInit();
      this.isListState = this.checkListState(event['url']);
    });
  }

  private onNavigationStart(callback) {
    this.router
      .events
      .filter(event => event instanceof NavigationStart)
      .subscribe(callback);
  }

  private checkListState(url) {
    return url === '/user';
  }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.userService
      .query()
      .subscribe(
        res => this.users = res['json'](),
        err => console.log(err)
      );
  }

  deleteUser(user) {
    this.deleteDialog
      .open()
      .yesClick
      .flatMap(res =>
        this.userService.deleteUser(user._id)
      )
      .subscribe(
        data => this.ngOnInit(),
        err => console.log(err)
      );
  }

  openModal() {

  }

}
