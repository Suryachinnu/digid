import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
 
  customerForm: FormGroup;
  emailregex: string = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'

  constructor(private fb:FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      fullName:['', [Validators.required]], //Validators.minLength(3)]],
      phoneNumber:['',[Validators.required]],
      email:['',[Validators.required, Validators.pattern(this.emailregex)]],
    referenceId:['',[Validators.required]],
    secondaryPhone: ['',[Validators.required]],
    secondaryEmail: ['',[Validators.required]],
    address:['',[Validators.required]],
    secondaryAddress: ['',[Validators.required]],
    reason: ['',[Validators.required]],
    userType: ['',[Validators.required]],
    profileImageUrl: ['',[Validators.required]],
    state: ['',[Validators.required]],
    customerJourneyStage: ['',[Validators.required]],
    expirationDate: ['',[Validators.required]],
    })
  }

  customerSubmit(customerForm){
    this.apiService.createCustomer(customerForm.value).subscribe( data => {
      if(data){
        console.log('Customer created successfully')
      } else console.error('Something went wrong')
    })
  }
  
}
