import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyEventsComponent } from './my-events.component';
import { routing } from '../modules/my-events.routing';
import { MyEventPageComponent } from './my-event-page/my-event-page.component';
import { WowzaCloudModule } from '../shared/wowza-streaming-cloud/wowza-cloud.module';
import { ShowInfoModule } from '../shared/show-info/show-info.module';
import { MyPagesHeaderModule } from '../shared/my-pages-header/my-pages-header.module';

@NgModule({
  imports: [
    routing,
    WowzaCloudModule,
    ShowInfoModule,
    MyPagesHeaderModule,
    CommonModule
  ],
  declarations: [
    MyEventsComponent,
    MyEventPageComponent
  ]
})

export class MyEventsModule {
}
