import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Contact } from '../models/Contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  url: string = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) {}

  //Getting all contacts
  public getAllContacts(): Observable<any> {
    return this.httpClient.get<Contact>(this.url + 'contacts');
  }

  //Getting a single contact based on id
  public getSingleContact(id: number): Observable<any> {
    return this.httpClient.get<Contact>(this.url + 'contacts/' + id);
  }

  //Create a contact
  public createContact(contact: Contact): Observable<any> {
    return this.httpClient.post(this.url + 'contacts', contact);
  }

  //Update a contact
  public updateContact(contact: Contact, id: number): Observable<any> {
    return this.httpClient.put(this.url + 'contacts/' + id, contact);
  }

  //Delete a contact
  public delectContact(id: number): Observable<any> {
    return this.httpClient.delete(this.url + 'contacts/' + id);
  }
}
