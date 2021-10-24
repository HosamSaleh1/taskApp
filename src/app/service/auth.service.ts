import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // ng g s services/authService
  baseUrl = 'http://localhost:3000/'
  constructor(private http:HttpClient) { }

  signUp(credentials:any){
    return this.http.post(this.baseUrl+'users',credentials)
  }
}
