import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  messageData: any;
  constructor() { }
  setMessage(data: any) {
    console.log(data)
    this.messageData = data;
    console.log(this.messageData)
  }
  getMessage() {
    return this.messageData;
  }
}
