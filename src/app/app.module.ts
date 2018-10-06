
// general angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

// components
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FrontComponent } from './front/front.component';
import { AdminComponent } from './admin/admin.component';
import { RosterComponent } from './roster/roster.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { ForumComponent } from './forum/forum.component';
import { About2Component } from './about2/about2.component';

// firebase related
import { masterFirebaseConfig } from './api-keys';
// new firebase related
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// pipes
import { ServiceYearsPipe } from './service-years.pipe';



var firebaseConfig = {
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
    ServiceYearsPipe,
    ForumComponent,
    About2Component
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






// default app.module.ts before changes

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
//
// import { AppComponent } from './app.component';
// import { AboutComponent } from './about/about.component';
// import { About2Component } from './about2/about2.component';
// import { AdminComponent } from './admin/admin.component';
// import { EditMemberComponent } from './edit-member/edit-member.component';
// import { ForumComponent } from './forum/forum.component';
// import { FrontComponent } from './front/front.component';
// import { MemberDetailComponent } from './member-detail/member-detail.component';
// import { RosterComponent } from './roster/roster.component';
//
// @NgModule({
//   declarations: [
//     AppComponent,
//     AboutComponent,
//     About2Component,
//     AdminComponent,
//     EditMemberComponent,
//     ForumComponent,
//     FrontComponent,
//     MemberDetailComponent,
//     RosterComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
