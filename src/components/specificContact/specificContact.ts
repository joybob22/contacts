import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContactService} from "../../service/contactService";

@Component ({
  templateUrl: 'specificContact.html'
})

export class SpecificContactComponent {
  contactIndex;
  contacts;

  constructor(private _route: ActivatedRoute, private contactService: ContactService) {
    this.contactIndex = _route.snapshot.params['id'];
    contactService.getContacts().then((newInfo) => {
      this.contacts = newInfo;
    })
  }

}
