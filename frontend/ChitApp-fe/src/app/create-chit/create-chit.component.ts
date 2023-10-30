import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-chit',
  templateUrl: './create-chit.component.html',
  styleUrls: ['./create-chit.component.css']
})
export class CreateChitComponent implements OnInit{

  createForm!: FormGroup;
  user:any;
  errorMessage: string=""

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
     private route: ActivatedRoute,
    private router: Router){
  }
  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: ["", Validators.required],
      startDate: ["", Validators.required],
      amount: ["", Validators.required],
      paidInstallments: ["", Validators.required]
    });
  }
}
