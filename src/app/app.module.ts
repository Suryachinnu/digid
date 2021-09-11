import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UsersComponent } from './views/users/users.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateUserComponent } from './views/create-user/create-user.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockJsonService } from './services/mock-json.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockJsonService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
