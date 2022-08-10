import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent implements OnInit {
  public loading: boolean = false;
  public id: number | null = null;
  public contact: Contact = {} as Contact;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = <number>(<unknown>param.get('id')); // this id in get method is from routing file
    });
    if (this.id) {
      this.loading = true;
      this.contactService.getSingleContact(this.id).subscribe((data) => {
        this.contact = data;
        this.loading = false;
      });
    }
  }
  submitUpdate() {
    if (this.id) {
      this.contactService
        .updateContact(this.contact, this.id)
        .subscribe((data) => {
          this.router.navigate(['/']).then();
        });
    }
  }
}
