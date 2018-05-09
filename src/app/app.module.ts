import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatTabsModule,
  MatCardModule,
  MatMenuModule,
  MatListModule,
  MatGridListModule,
  MatSelectModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { LawyerListComponent } from './lawyer/lawyer-list/lawyer-list.component';
import { LawyerDetailsComponent } from './lawyer/lawyer-details/lawyer-details.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { ServicesComponent } from './services/services.component';
import { LawyerItemComponent } from './lawyer/lawyer-item/lawyer-item.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
  { path: '', component: ServicesComponent },
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LawyerListComponent,
    LawyerDetailsComponent,
    ConsumerComponent,
    ServicesComponent,
    LawyerItemComponent,
    HeaderComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatSelectModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
