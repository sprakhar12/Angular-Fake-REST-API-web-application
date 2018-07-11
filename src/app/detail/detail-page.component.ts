import { Component, OnInit, Injectable} from '@angular/core';
import { MainPageService } from '../services/main-page.service';
import { MainPagesComponent } from '../Main/main-pages.component';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
  providers:[MainPagesComponent]
})

export class DetailPageComponent implements OnInit {

  photo: any;

  constructor(private service:MainPageService, private main:MainPagesComponent){
  }

  CreateData(id:HTMLInputElement, title:HTMLTextAreaElement, thumbnailUrl:HTMLInputElement){

    this.photo = [{id: id.value, title:title.value, thumbnailUrl: thumbnailUrl.value}];
    id.value = '';
    title.value = '';
    thumbnailUrl.value = '';

     /*  this.service.CreateData(this.photo)
      .subscribe(response => {
        this.photo = response.json();
        this.main.photos.unshift(this.photo);
        console.log(response.json());
    }); */
  }

  ngOnInit() {
  }

  
}



