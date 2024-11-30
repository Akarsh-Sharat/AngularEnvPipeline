import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { Observable } from 'rxjs';
import { customer } from '../Models/customer';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private httpClient: HttpClient ) { }

getCustomer(): Observable<customer[]> {
  var url = environment.apiBaseUrl;
  return this.httpClient.get<customer[]>(url)
}

}
