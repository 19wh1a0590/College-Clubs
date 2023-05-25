import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component {
  constructor() {}

  isShowDivIf = true;
  toggleDisplayDivIf(){
    this.isShowDivIf = !this.isShowDivIf;
  }

  ngOnInit(): void {}
}