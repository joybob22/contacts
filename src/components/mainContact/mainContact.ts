import { Component } from '@angular/core';
import {ContactService} from "../../service/contactService";

@Component ({
  templateUrl: 'mainContact.html'
})

export class MainContactComponent {

  contacts = [];
  constructor(private contactService: ContactService){
    contactService.getContacts().then((newInfo) => {
      this.contacts = newInfo;
    });
  }

  deleteContact(index) {
    this.contactService.deleteContact(index).then(() => {
      this.contactService.getContacts().then((data) => {
        this.contacts = data;
      })
    })
  }

}
