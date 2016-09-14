import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NameListService } from '../../shared/index';
import { UserService } from './../user.service';

class User {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
}

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-create-user',
  templateUrl: 'create-user.component.html',
  styleUrls: ['create-user.component.css'],
  providers: [UserService]
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  errorMessage: string;
  names: any[] = [];

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(
    public nameListService: NameListService,
    private router: Router,
    private userService: UserService
  ) { }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
  //    this.getNames();
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  createUser(): boolean {
    console.log(this.user);
    console.log(this.router);

    this.userService.save(this.user)
      .subscribe(
        res => this.router.navigate(['']),
        err => console.log(err)
      );

    return false;
  }

}
