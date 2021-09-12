import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getUserById(id){
    return this.http.get(`/api/users/${id}`)
  }
  getCustomerById(id){
    return this.http.get('/api/customer'+id)
  }
  getCustomers(){
    return this.http.get('/api/customers')
  }
}
