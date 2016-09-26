import { Injectable } from '@angular/core';
import { Route, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CreateUserComponent, ListUserComponent, UpdateUserComponent, UserResolver, UserService } from './index';


export const UserRoutes: Route[] = [
  {
    path: 'user/create',
    component: CreateUserComponent
  }, {
    path: 'user/:id',
    component: UpdateUserComponent,
    resolve: {
      user: UserResolver
    }
  }, {
    path: 'user',
    component: ListUserComponent
  }
];

export const UserRouteProviders: any[] = [
  UserResolver, UserService
];

