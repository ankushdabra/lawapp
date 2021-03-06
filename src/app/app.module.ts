import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatTabsModule,
  MatCardModule,
  MatMenuModule,
  MatListModule,
  MatGridListModule,
  MatSelectModule,
  MatInputModule,
  MatDividerModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatDialogModule,
  MatRadioModule,
  MatSidenavModule,
  MatSlideToggleModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { LawyerListComponent } from './lawyer/lawyer-list/lawyer-list.component';
import { LawyerDetailsComponent } from './lawyer/lawyer-details/lawyer-details.component';
import { ServicesComponent } from './services/services.component';
import { LawyerItemComponent } from './lawyer/lawyer-item/lawyer-item.component';
import { HeaderComponent } from './header/header.component';
import { CorePracticeItemComponent } from './core-practice-item/core-practice-item.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginDialogComponent } from './dialogs/login-dialog/login-dialog.component';
import { DialogSignupUserComponent } from './dialogs/dialog-signup-user/dialog-signup-user.component';
import { MatcherDirective } from './directives/matcher.directive';
import { PostQueryComponent } from './post-query/post-query.component';
import { PostQueryItemComponent } from './post-query/post-query-item/post-query-item.component';

const appRoutes: Routes = [
  { path: '', component: PostQueryComponent },
  { path: 'post-query', component: PostQueryComponent },
  { path: 'about-us', component: AboutUsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LawyerListComponent,
    LawyerDetailsComponent,
    ServicesComponent,
    LawyerItemComponent,
    HeaderComponent,
    CorePracticeItemComponent,
    AboutUsComponent,
    LoginDialogComponent,
    DialogSignupUserComponent,
    MatcherDirective,
    PostQueryComponent,
    PostQueryItemComponent,
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
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatRadioModule,
    MatSidenavModule,
    MatSlideToggleModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginDialogComponent, DialogSignupUserComponent]
})
export class AppModule {}
