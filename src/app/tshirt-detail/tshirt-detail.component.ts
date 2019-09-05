import {EventEmitter, Component, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'app-tshirt-detail',
  templateUrl: './tshirt-detail.component.html',
  styleUrls: ['./tshirt-detail.component.css']
})
export class TShirtDetailComponent implements OnInit {

  @Input() tshirt;
  quantity;
  error=false;
  @Output() cancelevent=new EventEmitter();
  @Output() buyevent=new EventEmitter();
  ngOnChanges(): void{

  }
  buy(){
    if(this.quantity){
      if(this.quantity>this.tshirt.inStock){
        alert("not available");
      }
      else{
        this.tshirt.inStock=this.tshirt.inStock-this.quantity;
        this.buyevent.emit(this.tshirt);
      }
    }
  }
  cancel(){
    this.cancelevent.emit(false);
  }
  constructor() { }

  ngOnInit() {
  }

}