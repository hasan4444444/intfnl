import { OgretmenComponent } from './components/ogretmen/ogretmen.component';
import { SoruComponent } from './components/soru/soru.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LoginComponent } from './components/login/login.component';
import { ConfirmDialogComponent } from './components/home/dialogs/confirm-dialog/confirm-dialog.component';
import { MaterialModule } from './material.module';
import { AlertDialogComponent } from './components/home/dialogs/alert-dialog/alert-dialog.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { OgrenciComponent } from './components/ogrenci/ogrenci.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainNavComponent,
    SoruComponent,
   OgrenciComponent,
   OgretmenComponent,
   
  
  
    
    //Dialoglar
    AlertDialogComponent,
    ConfirmDialogComponent


    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     BrowserAnimationsModule,
     MaterialModule,
     HttpClientModule
  ],

  entryComponents: [
    AlertDialogComponent,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
