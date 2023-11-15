import { Component, OnInit } from '@angular/core';
import { ChitServiceService } from '../chit-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chit-list',
  templateUrl: './chit-list.component.html',
  styleUrls: ['./chit-list.component.css']
})
export class ChitListComponent implements OnInit{
  chitsList!: any[];

  cols!: any[];
  dueAmount: any;
  constructor(private chitsService:ChitServiceService,
    private router: Router,
    ){}
  ngOnInit() {
    
    this.getAllChits();
    this.getCalculatedAmount();
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'amount', header: 'Amount' },
      { field: 'startDate', header: 'Start Date' },
      { field: 'endDate', header: 'End Date' },
      { field: 'settlementDate', header: 'Settlement Date' },
      { field: 'settlementAmount', header: 'Settlement Amount' },
      { field: 'paidInstallments', header: 'Paid Months' },


  ];
    
}
getAllChits(){
  this.chitsService.getAllChits().subscribe(res=>{
    this.chitsList = res;
    console.log(this.chitsList)
    // this.cols = Object.keys(this.chitsList[0])
    console.log(this.cols)
  })
}
getCalculatedAmount(){
  this.chitsService.getCalculatedAmount().subscribe(res=>{
    this.dueAmount = res;

  })
}
editChit(rowData:any){
  console.log(rowData)
  this.router.navigate(["chitList/edit",  rowData._id])
}
}
