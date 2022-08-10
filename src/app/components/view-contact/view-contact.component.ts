import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css'],
})
export class ViewContactComponent implements OnInit {
  public id: number | null;

  public loading: boolean = false;
  public contact: Contact = {} as Contact;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = <number>(<unknown>param.get('id')); //id in param.get() is from router
    });
    if (this.id) {
      this.loading = true;
      this.contactService.getSingleContact(this.id).subscribe((data) => {
        this.contact = data;
        this.loading = false;
      });
    }
  }

  public isNotEmpty() {
    return Object.keys(this.contact).length > 0;
  }
}
