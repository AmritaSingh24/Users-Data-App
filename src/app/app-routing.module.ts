import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailComponent } from './component/account-detail/account-detail.component';
import { UserCardComponent } from './component/user-card/user-card.component';

const routes: Routes = [
  {
    path: '', 
    component:UserCardComponent
  },
  {
    path: 'account-detail/:id', 
    component:AccountDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
