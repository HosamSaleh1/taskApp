import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  invalidEmail:boolean = false
  invalidAge:boolean = false
  constructor(private authServic:AuthService) { }

  signUp(credentails:any){
    this.authServic.signUp(credentails).subscribe((res)=>{
      console.log(res)
    },(httpError)=>{
      console.log(httpError)
      console.log(httpError.error.code)
      if(httpError.error.code === 11000){
        this.invalidEmail = true
      }
      if(httpError.error.errors.age.name === 'ValidatorError'){
        this.invalidAge = true
      }
    })
  }

  ngOnInit(): void {
  }

}
