import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public reference:GlobalService) { }

  ngOnInit(): void {
  }

  showLoginContainer = false;

  //String Interpolation (or) Data Binding
  title:string = "Angular Demo"

  //Property Binding
  path:string="../../assets/angular-logo.png";
  width_size:number=75;
  height_size:number=75;
  login_icon_path:string="../../assets/login_icon.png";
  login_icon_width:number=80;

  toggleLogin() {
    this.showLoginContainer = !this.showLoginContainer;
  }

}
