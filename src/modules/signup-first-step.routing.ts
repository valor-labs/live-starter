import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { FirstStepComponent } from '../signup/first-step/first-step.component';

export const routes: Routes = [
  {path: '', component: FirstStepComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
