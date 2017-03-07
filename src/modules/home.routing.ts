import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from '../home';

export const routes: Routes = [
  { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
