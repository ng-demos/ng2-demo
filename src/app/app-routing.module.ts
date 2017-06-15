import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FallbackComponent } from './fallback/fallback.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
  },
  {
    path: 'account',
    loadChildren: './account/account.module#AccountModule',
  },
  {
    path: '**',
    component: FallbackComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
