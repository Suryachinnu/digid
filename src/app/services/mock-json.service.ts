import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { customer, User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MockJsonService implements InMemoryDbService{
  createDb() {
    let customers: customer[] = [
      {
        id:1,        
        fullName: 'Surya Kumar',
        phoneNumber: '9848280909',
        email: 'suryakumaryadala@gmail.com',
        referenceId: '1123',
        secondaryPhone: '',
        secondaryEmail: '',
        address: 'qwerty 1223',
        secondaryAddress: '',
        reason: 'visit',
        userType: 'customer',
        profileImageUrl: '../user.jpg',
        state: 'AP',
        customerJourneyStage: 'entry',
        expirationDate: '12/06/2021'
      },
      {
        id:2,        
        fullName: 'John Doe',
        phoneNumber: '9848280909',
        email: 'johndoe@gmail.com',
        referenceId: '1123',
        secondaryPhone: '',
        secondaryEmail: '',
        address: 'qwerty 1223',
        secondaryAddress: '',
        reason: 'visit',
        userType: 'customer',
        profileImageUrl: '../user.jpg',
        state: 'AP',
        customerJourneyStage: 'entry',
        expirationDate: '12/06/2021'
      }
    ]
    let users: User[] = [
      {
        id: 1,
        email: 'suryakumaryadala@gmail.com',
        password: '123344',
        phone: '98383838',
        role: [
          'Admin',
          'user',
          'gatekeeper'
        ]
      }
    ]
    return  { customers, users }
  }
}
