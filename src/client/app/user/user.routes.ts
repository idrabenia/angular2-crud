import { Route } from '@angular/router';
import { CreateUserComponent, ListUserComponent } from './index';

export const UserRoutes: Route[] = [
  {
    path: 'user/create',
    component: CreateUserComponent
  }, {
    path: 'user',
    component: ListUserComponent
  }
];
