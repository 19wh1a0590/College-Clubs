import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { PracticeComponent } from './practice/practice.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { SportvisitComponent } from './sportvisit/sportvisit.component';
// import { CommonModule } from '@angular/common';
// import { FullCalendarModule } from '@fullcalendar/angular';
// import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { AdminComponent } from './admin/admin.component';
import { EventComponent } from './event/event.component';
import { CommentComponent } from './comment/comment.component';
import { AchieveComponent } from './achieve/achieve.component';
import { CulturalComponent } from './cultural/cultural.component';
import { CommentCulturalComponent } from './comment-cultural/comment-cultural.component';
import { CommentEnglishComponent } from './comment-english/comment-english.component';
import { EnglishComponent } from './english/english.component';
import { AdmincertificateComponent } from './admincertificate/admincertificate.component';
import { UserComponent } from './user/user.component';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
// import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({

  
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HomepageComponent,
    NavbarComponent,
    Navbar1Component,
    PracticeComponent,
    ProfileComponent,
    SettingComponent,
    SportvisitComponent,
    AdminComponent,
    EventComponent,
    CommentComponent,
    AchieveComponent,
    CulturalComponent,
    CommentCulturalComponent,
    CommentEnglishComponent,
    EnglishComponent,
    AdmincertificateComponent,
    UserComponent,
    FilterComponent,
    SearchComponent,
   


  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    // NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
