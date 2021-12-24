import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent } from './component/user-card/user-card.component';
import { AccountDetailComponent } from './component/account-detail/account-detail.component';
import { UsersDataService } from './service/users-data.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    AccountDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsersDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
