import { Component } from '@angular/core';
import { customer } from '../../Models/customer';
import { CustomersService } from '../../Service/customers.service';

@Component({
  selector: 'app-customers',
  standalone: false,
  
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {

  customer: Array<customer> = []

  constructor(private customerService: CustomersService ){}

  ngOnInit(){
    this.getCustomerList();
  }
  getCustomerList(){
    this.customerService.getCustomer().subscribe(res =>{
      this.customer = res;
      console.log(res)
    })
  }
}
