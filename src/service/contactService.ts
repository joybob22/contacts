import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()


export class ContactService {

  constructor(private http: Http){}

  getContacts() {
    var stuff = this.http.get('http://localhost:3000/contacts')
        .toPromise().then(this.extractData);
    return stuff;
  }
  extractData(res) {
    let initial = res._body;
    initial = JSON.parse(initial);
    initial = initial.contacts;
    return initial;
  }

  addNewContact(data) {
    this.http.post('http://localhost:3000/addContact', data).toPromise().then();
  }

  deleteContact(index) {
    return this.http.delete('http://localhost:3000/deleteContact/' + index).toPromise().then(() => {
      return true;
    });
  }
}
