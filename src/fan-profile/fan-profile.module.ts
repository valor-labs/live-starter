import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ButtonsModule, TabsModule } from 'ng2-bootstrap';

import { SharedModule } from '../shared';
import { FanProfileComponent } from './fan-profile.component';
import { BiographyComponent } from './bio/bio.component';
import { CommentsComponent } from './comments/comments.component';
import { ShowsComponent } from './shows/shows.component';
import { FanProfileService } from './fan-profile.service';

@NgModule({
  declarations: [
    FanProfileComponent,
    BiographyComponent,
    CommentsComponent,
    ShowsComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule
  ],
  providers: [FanProfileService],
  exports: []
})
export class FanProfileModule {
}
