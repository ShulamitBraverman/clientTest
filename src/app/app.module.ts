import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ConcentrationProcessComponent } from './components/concentration-process/concentration-process.component';
import { ClaimComponent } from './components/claim/claim.component';
import { ConcentrationContactsComponent } from './components/concentration-process/concentration-contacts/concentration-contacts.component';
import { ClaimAppComponent } from './components/claim-app/claim-app.component';
import { PhoneFormatPipe } from '../pipes/phone-format.pipe';
import { ActionsService } from '../services/actions.service';

@NgModule({
  declarations: [
    AppComponent,
    ConcentrationProcessComponent,
    ConcentrationContactsComponent,
    ContactsComponent,
    ClaimComponent,
    ClaimAppComponent,
    PhoneFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
