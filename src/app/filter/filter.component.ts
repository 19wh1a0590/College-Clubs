import { Component ,OnInit, Input, EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{
  ngOnInit(): void {
      
  }
   
  @Input() all : number=0;
  @Input() Merit : number=0;
  @Input() Participation : number=0;
//selectedRadioButton - it keeps track of the radio button which the user selected
  selectedRadioButton : string = 'All';
  //to create a custom event
  //there are 3 steps involved, 
  //1. Create a property and specify its type as EventEmitter and also instantiate that
  //2. And then we also need to decorate it with an Output decorator
  
  @Output()
  filterRadioButton : EventEmitter <string> = new EventEmitter<string>();
//3. Create a method to raise this event
  onRadioButton(){
    this.filterRadioButton.emit(this.selectedRadioButton); 
    // console.log(this.selectedRadioButton);//to check in the console
    }

}
