import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SportvisitComponent } from './sportvisit/sportvisit.component';
import { ProfileComponent } from './profile/profile.component';
import { PracticeComponent } from './practice/practice.component';
import { SettingComponent } from './setting/setting.component';
import { EventComponent } from './event/event.component';
import { AdminComponent } from './admin/admin.component';
import { CommentComponent } from './comment/comment.component';
import { AchieveComponent } from './achieve/achieve.component';
import { CommentCulturalComponent } from './comment-cultural/comment-cultural.component';
import { CulturalComponent } from './cultural/cultural.component';
import { CommentEnglishComponent } from './comment-english/comment-english.component';
import { EnglishComponent } from './english/english.component';
import { AdmincertificateComponent } from './admincertificate/admincertificate.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login',component:LoginComponent},
  {path: 'homepage', component:HomepageComponent},
  {path: 'sportvisit', component:SportvisitComponent},
  {path: 'event', component:EventComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'practice', component:PracticeComponent},
  {path: 'setting', component:SettingComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'admincertificate', component:AdmincertificateComponent},
  {path: 'comment', component:CommentComponent},
  {path: 'cultural', component:CulturalComponent},
  {path: 'achieve', component:AchieveComponent},
  {path: 'comment-cultural',component:CommentCulturalComponent},
  {path: 'comment-english',component:CommentEnglishComponent},
  {path: 'english',component:EnglishComponent,},
  {path: 'user',component:UserComponent,},

  // {path: 'chat', component:ChatComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
