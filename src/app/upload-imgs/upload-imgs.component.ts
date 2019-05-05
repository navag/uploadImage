import { Component, OnInit } from '@angular/core';
import { ImgOpertionsService } from '../http-service/img-opertions.service';
import { ToasterService } from '../common-services/toaster.service';


@Component({
  selector: 'app-upload-imgs',
  templateUrl: './upload-imgs.component.html',
  styleUrls: ['./upload-imgs.component.css']
})
export class UploadImgsComponent implements OnInit {

  constructor(private imgOperationServices: ImgOpertionsService,
    private toaserService: ToasterService) { }

  ngOnInit() {
  }

  selectedFile:File;
  url = '';
  imageError = false;
  onSelectFile(event) {
    console.log(event,event.target.files[0].type);    
    if (event.target.files && event.target.files[0] && (event.target.files[0].type === "image/jpeg" || event.target.files[0].type === "image/png" || event.target.files[0].type === "image/jpg")) {
      var reader = new FileReader();
      this.imageError = false;
      this.selectedFile = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target["result"];              
      }
    }else {
      this.imageError = true;
      this.url = '';
    }
  }


  removeImg(){
    this.url = '';
  }


  uploadImg(){
  const uploadData = new FormData();
  console.log(this.selectedFile);
  // uploadData.append('picture', this.selectedFile, this.selectedFile.name);
  uploadData.append('base64Img',this.url);
  this.imgOperationServices.uploadImg(uploadData)
    .subscribe(res => {
      this.toaserService.success("Image Upload Successfully.","SUCCESSS");
      console.log(res);
    },
    err=>{
      console.log(err);
      this.toaserService.error("Unexpected Error Occured at Server","ERROR");
    });
  }

}
