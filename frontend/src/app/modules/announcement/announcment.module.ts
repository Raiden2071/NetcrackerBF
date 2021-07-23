import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnnouncmentRoutingModule } from './announcment-routing.module';
import { AnnouncmentComponent } from './components/announcment.component';



@NgModule({
  declarations: [AnnouncmentComponent],
  imports: [
    CommonModule,
    AnnouncmentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AnnouncmentModule { }
