import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactPageRoutingModule } from 'src/app/pages/contact/contact-page-routing.module';
import { ContactPageComponent } from './contact-page.component';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [CommonModule, ContactPageRoutingModule],
})
export class ContactPageModule {}
