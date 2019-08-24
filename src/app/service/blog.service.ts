import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
url=" http://localhost:3000/api/user"
  constructor(private http:HttpClient) { }


  addPost=(data)=>{
    return this.http.post( this.url + "/blogcreate",data); 
  }
  getPost=()=>{
    return this.http.get(this.url + '/showblog');
  }
  

deleteProduct(id) {
  return this
            .http
            .get(`${this.url}/delete/${id}`);
}


updatePost=(post:Post)=>{
  let header=new HttpHeaders({'content-Type':'application/json'})

  return this.http.put(this.url +post._id,JSON.stringify(post))
}
}