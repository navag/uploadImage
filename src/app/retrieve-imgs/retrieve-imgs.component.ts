import { Component, OnInit } from '@angular/core';
import { ImgOpertionsService } from '../http-service/img-opertions.service';
import { ToasterService } from '../common-services/toaster.service';


@Component({
  selector: 'app-retrieve-imgs',
  templateUrl: './retrieve-imgs.component.html',
  styleUrls: ['./retrieve-imgs.component.css']
})
export class RetrieveImgsComponent implements OnInit {

  imgArray;
  url = ""; 
  constructor(private imgOperationServices:ImgOpertionsService,
    private toasterServices: ToasterService) { }

  ngOnInit() {
    this.RetrieveImgs();
  }

  RetrieveImgs(){
    this.imgOperationServices.retrieveImgs()
       .subscribe(res => {
         console.log(res);
         this.imgArray = res;
         this.url = res[1].base64Img;
       },
       err=>{
         console.log(err);
       });
     }
 
}
