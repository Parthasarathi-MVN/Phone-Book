import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css'],
})
export class ContactManagerComponent implements OnInit {
  public loading: boolean = false;
  public contacts: Contact[] = [];
  searchText: any;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.getAllContactsFromServer();
  }

  getAllContactsFromServer() {
    this.loading = true;
    this.contactService.getAllContacts().subscribe((data) => {
      this.contacts = data;
      this.loading = false;
    });
  }
  deleteContact(id: number) {
    if (id) {
      // checking if null
      this.contactService.delectContact(id).subscribe((data) => {
        this.getAllContactsFromServer();
      });
    }
  }

  key: string = 'id';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
