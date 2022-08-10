import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  loading: boolean = false;
  contact: Contact = {} as Contact;
  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {}

  createContact() {
    this.contactService.createContact(this.contact).subscribe((data) => {
      this.router.navigate(['/']).then();
    });
  }
}
