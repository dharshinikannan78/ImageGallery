import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SharedService } from '../shared/shared.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message: any;
  constructor(private router: Router, private shared: SharedService) { }
  ngOnInit() {
    this.message = this.shared.getMessage();
    this.message = sessionStorage.getItem('email')
  }
  list: any;
  searchText: any;
  pictures = [
    { src: '../assets/mountain.jpg', name: 'Mountain' },
    { src: '../assets/nature.jpg' },
    { src: '../assets/road.jpg' },
    { src: '../assets/rose .jpg' },
    { src: '../assets/tree.jpg' },
    { src: '../assets/water.jpg' },
    { src: '../assets/butterfly.jpg' },
    { src: '../assets/cloud.jpg' },
    { src: '../assets/wallpaper.jpg' },
    { src: '../assets/data.jpg' },
  ];

  addClick(event: any) {
    this.list = event.target.files[0];
    this.list = event;
    console.log(this.list)
  }
  logOut() {
    this.list = false;
    this.message = sessionStorage.removeItem('email')
    this.router.navigate([''])
  }
}

