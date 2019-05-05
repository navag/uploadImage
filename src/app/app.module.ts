import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadImgsComponent } from './upload-imgs/upload-imgs.component';
import { RetrieveImgsComponent } from './retrieve-imgs/retrieve-imgs.component';
import { ImgOpertionsService } from './http-service/img-opertions.service';
import { ToasterService } from './common-services/toaster.service';




@NgModule({
  declarations: [
    AppComponent,
    UploadImgsComponent,
    RetrieveImgsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"uploadImg",component:UploadImgsComponent},
      {path:"retrieveImg",component:RetrieveImgsComponent},
      {path:"",redirectTo:"uploadImg",pathMatch:"full"},
      {path:"**",component:UploadImgsComponent,pathMatch:"full"}
    ]),
  ],
  providers: [ImgOpertionsService,ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
