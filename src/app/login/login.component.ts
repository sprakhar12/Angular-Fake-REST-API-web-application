import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../services/main-page.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isCollapsed = true;

  constructor(private service: MainPageService) {

   }

  ngOnInit() {
  }

}
