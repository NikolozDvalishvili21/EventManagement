import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { EventPageComponent } from './pages/event-page/event-page.component';
export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'event', component: EventPageComponent}
];
