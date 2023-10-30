import { Component, OnInit } from '@angular/core';
import { ChitServiceService } from '../chit-service.service';

@Component({
  selector: 'app-chit-list',
  templateUrl: './chit-list.component.html',
  styleUrls: ['./chit-list.component.css']
})
export class ChitListComponent implements OnInit{
  chitsList!: any[];

  cols!: any[];
  constructor(private chitsService:ChitServiceService){}
  ngOnInit() {
    
    this.getAllChits()
    
}
getAllChits(){
  this.chitsService.getAllChits().subscribe(res=>{
    this.chitsList = res;
    console.log(this.chitsList)
    this.cols = Object.keys(this.chitsList[0])
    console.log(this.cols)
  })
}
}
