import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { customer } from 'src/app/models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  customers:any = [];

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.apiservice.getCustomers().subscribe( res =>{
      this.customers = res;
    } )
  }

}
