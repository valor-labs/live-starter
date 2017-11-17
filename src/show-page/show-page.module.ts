import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { ShowPageComponent } from './show-page.component';
import { routing } from '../modules/show-page.routing';
import { WowzaCloudModule } from '../shared/wowza-streaming-cloud/wowza-cloud.module';

@NgModule({
  declarations: [
    ShowPageComponent
  ],
  imports: [
    routing,
    CommonModule,
    FormsModule,
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    WowzaCloudModule
  ]
})

export class ShowPageModule {
}
