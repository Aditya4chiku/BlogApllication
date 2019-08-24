import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {

  constructor(private blogService:BlogService,
    private route:Router) { }
  public posts : any

  ngOnInit() {
    this.getAllPost()
  }
  getAllPost=()=>{
    this.blogService.getPost().subscribe(result=>{
      this.posts=result

    })
  }
  updatePost=(id:any)=>{
    this.blogService.updatePost(id).subscribe(data=>{
      console.log("update")
    })   
  }


 deletePost=(id:any)=>{
  this.blogService.deleteProduct(id).subscribe(res=>{
    this.posts.splice(id,1)
  })
  }


}
