import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { customer } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getUserById(id){
    return this.http.get(`/api/users/${id}`)
  }
  getCustomerById(id){
    return this.http.get(`/api/customers/${id}`)
  }
  getCustomers(){
    return this.http.get('/api/customers')
  }
  createCustomer(data: customer){
    return this.http.post('/api/customers', data)
  }
  updateCustomer(data: customer, id: number){
    return this.http.post(`/api/customers/${id}`, data)
  }
}
