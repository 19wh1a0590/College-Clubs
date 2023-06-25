import { Component,OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  ngOnInit(): void {
      
  }
  enteredSearchValue:string='';

  //create a custom event
  @Output()
  searchTextChanged : EventEmitter<string>=new EventEmitter<string>();

  //then raise this Event - for that create a methos
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }

}
