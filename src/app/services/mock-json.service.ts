import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class MockJsonService implements InMemoryDbService{
  createDb() {
    let users = [
      {
        name:'Surya',
        mail: 'suryakumaryadala@gmail.com',
        password: '12345678',
        phone: 9848280909,
        profileUrl: '../user.jpg',
        PAN: 'AOAIOUUA&'
      }
    ]
    return users
  }
}
