import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  user:any;
  errorMessage: string=""
  
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
     private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  onValidate(){
    if(this.loginForm.valid){
      this.user = this.loginForm.value;
      console.log(this.user)
      if(this.user.username == this.user.password){
        console.log("hi")
        this.router.navigate(['/chitList'])

      }
    }
    this._snackBar.open ("test");
  }
}
