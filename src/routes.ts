import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home';
import { FirstStepComponent } from './signup/first-step/first-step.component';
import { SecondStepComponent } from './signup/second-step/second-step.component';
import { ArtistsComponent } from './artists/artists.component';
import { BlogComponent } from './blog';
import { ArtistProfileComponent } from './artist-profile';
import { FanProfileComponent } from './fan-profile';
import { EditProfileComponent } from './edit-profile';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'first-step', component: FirstStepComponent},
  {path: 'second-step', component: SecondStepComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: 'artist-profile', component: ArtistProfileComponent},
  {path: 'fan-profile', component: FanProfileComponent},
  {path: 'edit-profile', component: EditProfileComponent},
  {path: 'blog', component: BlogComponent},
  {path: '**', redirectTo: 'home'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

