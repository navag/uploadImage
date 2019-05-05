import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ImgOpertionsService {

  constructor(private http:HttpClient) { }
uploadImg(uploadData){
  return this.http.post("http://localhost:3000/upload", uploadData);
}

retrieveImgs(){
  return this.http.get("http://localhost:3000/upload");
}
}
