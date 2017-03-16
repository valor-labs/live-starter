import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { TooltipModule } from 'ng2-bootstrap/tooltip';
import { FormsModule } from '@angular/forms';

import { EventsListComponent } from './events-list.component';
import { SharedModule, SearchService } from '../shared';
import { routing } from '../modules/events-list.routing';

@NgModule({
  declarations: [
    EventsListComponent
  ],
  imports: [
    routing,
    FormsModule,
    CommonModule,
    ButtonsModule.forRoot(),
    DatepickerModule.forRoot(),
    DropdownModule.forRoot(),
    TooltipModule.forRoot(),
    SharedModule
  ],
  providers: [
    SearchService
  ],
  exports: []
})

export class EventsListModule {
}
