import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegsiterComponent } from './regsiter/regsiter.component';
import { HomeComponent } from './home/home.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ShowPostComponent } from './show-post/show-post.component';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'createBlog',component:CreateBlogComponent},

{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'register',component:RegsiterComponent},
{path:'addpost',component:AddPostComponent},
{path:'showpost',component:ShowPostComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
