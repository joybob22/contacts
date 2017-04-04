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



}
