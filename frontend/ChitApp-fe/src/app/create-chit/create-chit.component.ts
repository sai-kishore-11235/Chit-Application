import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ChitServiceService } from '../chit-service.service';

@Component({
  selector: 'app-create-chit',
  templateUrl: './create-chit.component.html',
  styleUrls: ['./create-chit.component.css']
})
export class CreateChitComponent implements OnInit{

  createForm!: FormGroup;
  chit:any;
  errorMessage: string=""

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
     private route: ActivatedRoute,
    private router: Router,
    private chitsService: ChitServiceService){
  }
  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: ["", Validators.required],
      startDate: ["", Validators.required],
      amount: ["", Validators.required],
      paidInstallments: ["", Validators.required]
    });
  }
  onValidate():void{
    if(this.createForm.valid){
      this.chit = this.createForm.value
      this.chitsService.saveChit(this.chit).subscribe((res)=>{
        console.log(res);
        this.errorMessage=""
       this.createForm.reset()
       this._snackBar.open("Chit record Added Successfully", "Chits",{
        duration: 3000
      });
      })
    }
  }
}
