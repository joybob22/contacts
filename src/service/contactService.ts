import {Injectable} from "@angular/core";


@Injectable()


export class ContactService {

  contacts = [
    {
      firstName: 'Jim',
      lastName: 'McDonald',
      phoneNumber: '801-123-6549',
      address: '101 London Bridge Dr. Provo Ut. 84043'
    },
    {
      firstName: 'Sally',
      lastName: 'McDonald',
      phoneNumber: '861-183-6539',
      address: '102 London Bridge Dr. Provo Ut. 84543'
    },
    {
      firstName: 'Bob',
      lastName: 'Jacob',
      phoneNumber: '808-223-6649',
      address: '103 London Bridge Dr. Provo Ut. 34043'
    },
    {
      firstName: 'Mac',
      lastName: 'Donalds',
      phoneNumber: '301-127-6449',
      address: '104 London Bridge Dr. Provo Ut. 85643'
    },
    {
      firstName: 'Wendy',
      lastName: 'McFarland',
      phoneNumber: '851-843-6367',
      address: '105 London Bridge Dr. Provo Ut. 32043'
    }
  ]
}
