import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnnouncmentRoutingModule } from './announcment-routing.module';
import { AnnouncmentComponent } from './components/announcment.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CreateAnnouncementComponent } from 'src/app/modals/create-announcement/components/create-announcement';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [AnnouncmentComponent,CreateAnnouncementComponent],
  imports: [
    CommonModule,
    AnnouncmentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class AnnouncmentModule { }