import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[{
      path: 'user',
      loadChildren: () => import('./modules/member-module/member.module').then(m => m.UserModule),
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
