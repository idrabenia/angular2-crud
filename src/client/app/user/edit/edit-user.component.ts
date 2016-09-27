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


@Component({
  moduleId: module.id,
  selector: 'sd-create-user',
  templateUrl: 'edit-user.component.html',
  styleUrls: ['edit-user.component.css'],
  providers: [UserService]
})
export class CreateUserComponent {
  user: User = new User();

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  save(form): boolean {
    if (!form.valid) {
      return;
    }

    this.userService
      .save(this.user)
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
export class UpdateUserComponent {
  user: User;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.user = route.snapshot.data['user'];
  }

  save(form): boolean {
    if (!form.valid) {
      return;
    }

    this.userService
      .update(this.user)
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
