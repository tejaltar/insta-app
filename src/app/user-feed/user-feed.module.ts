import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../user-feed/home-page/home-page.component';
import { UserFeedRoutingModule } from './user-feed-routing.module';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [
    CommonModule,
    UserFeedRoutingModule
  ],
  declarations: [HomePageComponent, PostComponent]
})
export class UserFeedModule { }
