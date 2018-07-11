import { Component, OnInit, Input} from '@angular/core';
import { MainPageService } from '../services/main-page.service';

@Component({
  selector: 'app-main-pages',
  templateUrl: './main-pages.component.html',
  styleUrls: ['./main-pages.component.css'],
})

export class MainPagesComponent implements OnInit {

  photos: any[];
  photo: any;
  tempPhoto: any;
  showSelected: boolean;
  showUpdate: boolean;
  switchDeleteImage: boolean;
  page: number;
  isCollapsed = true;

  constructor(private service: MainPageService) 
  {
      this.showSelected = false;
      this.showUpdate = false;
      this.switchDeleteImage = false;
      this.page = 1;
   }

   ngOnInit() {
    this.service.getPhotos()
   .subscribe(response => {
     this.photos = response.json();
   });
  }

  updatePhotos(photo, id:HTMLInputElement, title:HTMLTextAreaElement, thumbnailUrl:HTMLInputElement){
    id.value = photo.id;
    title.value = photo.title;
    thumbnailUrl.value = photo.thumbnailUrl;
    this.tempPhoto = [{id: photo.id, title: photo.title}];
  }

  updating(){
    this.refreshPage();
  }

  deletePhoto(photo){
    this.service.deletePhoto(photo)
    .subscribe(response => {
      let index = this.photos.indexOf(photo);
      this.photos.splice(index, 1);
    })
   }

   DeleteAll(){
    this.photos = [];
  }

  SeeUpdateForm(){
    this.showUpdate = !this.showUpdate;
  }

   showTile(){
    this.showSelected = false;
   }

   showTable(){
    this.showSelected = true;
   }

   switchDeleteToImage(){
    this.switchDeleteImage = true;
   }

   refreshPage(){
     window.location.reload(true);
   }
}
