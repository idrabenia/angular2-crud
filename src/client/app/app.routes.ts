import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { UserRoutes, UserRouteProviders } from './user/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...UserRoutes
];

export const routeProviders: any[] = [
  ...UserRouteProviders
];