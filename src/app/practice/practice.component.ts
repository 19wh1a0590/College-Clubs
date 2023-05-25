import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit{
 
  
  constructor() {}

  isShowDivIf = true;
  toggleDisplayDivIf(){
    this.isShowDivIf = !this.isShowDivIf;
  }

  ngOnInit(): void {}
}