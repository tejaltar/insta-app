import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'user-feed', loadChildren: () => import('./user-feed/user-feed.module').then(m => m.UserFeedModule) },
  {
      path: '',
      redirectTo: 'user-feed',
      pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
