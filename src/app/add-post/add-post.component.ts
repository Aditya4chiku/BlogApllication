import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { Post } from '../model/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private blogService:BlogService,
    private router:Router) { }
   post=new Post()
  ngOnInit() {
  }

  
  addPost=()=>{
    if(this.post.title && this.post.description){
      this.blogService.addPost(this.post).subscribe(data=>{
        console.log(data)
      },err=>{
        console.log(err)
      })
    }
    else{
      alert("Please enter title and description")
    }
  }

}
