import { Route } from '@angular/router';
import { CreateUserComponent, ListUserComponent, UpdateUserComponent } from './index';

export const UserRoutes: Route[] = [
  {
    path: 'user/create',
    component: CreateUserComponent
  }, {
    path: 'user/:id',
    component: UpdateUserComponent
  }, {
    path: 'user',
    component: ListUserComponent
  }
];
