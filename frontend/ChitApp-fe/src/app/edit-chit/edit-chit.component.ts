import { Component, Input, OnInit } from '@angular/core';
import { ChitServiceService } from '../chit-service.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-chit',
  templateUrl: './edit-chit.component.html',
  styleUrls: ['./edit-chit.component.css']
})
export class EditChitComponent implements OnInit {
  chit: any;
  paidAmount: Number = 0;
  totalAmount: number = 0;
  date: any;
  minDate: any ;
  maxDate: any ;

  constructor(private chitsService: ChitServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const chitId = this.route.snapshot.paramMap.get('id');
    console.log(chitId)
    this.getChit(chitId);
  }
  getChit(chitId: any) {
    this.chitsService.getChit(chitId).subscribe(res => {
      this.chit = res;
      this.totalAmount = this.chit.amount * 10;
      this.paidAmount = this.chit.amount * this.chit.paidInstallments.length
      this.minDate = moment(this.chit.startDate).add(this.chit.paidInstallments.length, 'month').toDate()

      // this.minDate = new Date(this.chit.startDate)
      this.maxDate = new Date(this.chit.endDate)
      console.log(this.minDate)
    })
  }
  validateDate(){
    console.log(moment(this.date).format("MMM"))
    if(!(this.chit.paidInstallments.includes(moment(this.date).format("MMM"))))
      this.chit.paidInstallments.push(moment(this.date).format("MMM"))
  }

}
