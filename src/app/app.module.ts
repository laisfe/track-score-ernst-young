import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SideImageComponent } from './shared/components/side-image/side-image.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { WorkersComponent } from './pages/workers/workers.component';
import { WorkerComponent } from './pages/worker/worker.component';
import { GlobalVariable } from './shared/globals';
import { IncreaseComponent } from './pages/increase/increase.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideImageComponent,
    SignupComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    WorkersComponent,
    WorkerComponent,
    IncreaseComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule
  ],
  exports:[
    AngularFirestoreModule
  ],
  providers: [
    GlobalVariable
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
