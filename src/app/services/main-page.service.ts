import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class MainPageService {
  private url = 'https://jsonplaceholder.typicode.com/photos';
  photo: any;

  constructor(private http: Http) { }

  getPhotos(){
    return this.http.get(this.url);
  }

  CreateData(photo){
    return this.http.post(this.url, JSON.stringify(photo));
  }

  deletePhoto(photo){
    return this.http.delete(this.url + '/' + photo.id);
  }
  
 updatePhotos(photo){
    return this.http.patch(this.url + '/' + photo.id, JSON.stringify(photo));
  }
}
