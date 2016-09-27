import { Injectable } from '@angular/core';
import { Route, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CreateUserComponent, ListUserComponent, UpdateUserComponent, UserResolver, UserService } from './index';


export const UserRoutes: Route[] = [{
    path: 'user',
    component: ListUserComponent,
    children: [
    {
      path: '',
      component: null
    }, {
      path: 'create',
      component: CreateUserComponent
    }, {
      path: ':id',
      component: UpdateUserComponent,
      resolve: {
        user: UserResolver
      }
    }]
}];

export const UserRouteProviders: any[] = [
  UserResolver, UserService
];

