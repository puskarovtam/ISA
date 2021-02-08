import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: any = null;
  private token: any = null;
  passwordChanged = true;

  constructor(private http: HttpClient) { }
}
