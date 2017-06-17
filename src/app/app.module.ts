import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FrontComponent } from './front/front.component';
import { AdminComponent } from './admin/admin.component';
import { RosterComponent } from './roster/roster.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { ServiceYearsPipe } from './service-years.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FrontComponent,
    AdminComponent,
    RosterComponent,
    MemberDetailComponent,
    EditMemberComponent,
    ServiceYearsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
