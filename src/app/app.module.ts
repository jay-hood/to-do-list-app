import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './shared/modules/app-routing.module';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/modules/shared.module';
import { AuthModule } from './shared/modules/auth.module';
import { CoreModule } from './shared/modules/core.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { BulletinBoardComponent } from './bulletin-board/bulletin-board.component';
import { BulletinComponent } from './bulletin-board/bulletin/bulletin.component';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BulletinBoardComponent,
    BulletinComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
