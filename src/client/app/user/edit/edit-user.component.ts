import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from './../user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

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
  templateUrl: 'edit-user.component.html',
  styleUrls: ['edit-user.component.css'],
  providers: [UserService]
})
export class CreateUserComponent implements OnInit {
  user: User = new User();

  constructor(
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
    this.userService.save(this.user)
      .subscribe(
        res => this.router.navigate(['/user']),
        err => console.log(err)
      );

    return false;
  }

}

@Component({
  moduleId: module.id,
  selector: 'sd-create-user',
  templateUrl: 'edit-user.component.html',
  styleUrls: ['edit-user.component.css'],
  providers: [UserService]
})
export class UpdateUserComponent implements OnInit {
  user: User = new User();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.user = route.snapshot.data['user'];
  }

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
    this.userService.update(this.user)
      .subscribe(
        res => this.router.navigate(['/user']),
        err => console.log(err)
      );

    return false;
  }

}

@Injectable()
export class UserResolver implements Resolve<any> {
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.userService
      .findById(route.params['id'])
      .map(res => res.json());
  }
}
