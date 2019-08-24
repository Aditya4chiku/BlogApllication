import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropDirective } from './dragdrop.directive';

import { HomeComponent } from './home/home.component';
import { RegsiterComponent } from './regsiter/regsiter.component';
import { LoginComponent } from './login/login.component'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

import { CreateBlogComponent } from './create-blog/create-blog.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ShowPostComponent } from './show-post/show-post.component'
@NgModule({
  declarations: [
    AppComponent,
    DragDropDirective,
    HomeComponent,
    RegsiterComponent,
    LoginComponent,
    HeaderComponent,
 
    CreateBlogComponent,
 
    AddPostComponent,
 
    ShowPostComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
