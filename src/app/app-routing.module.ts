import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FallbackComponent } from './fallback/fallback.component';

const routes: Routes = [
  {
    path: 'new',
    loadChildren: './user/user.module#UserModule',
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
