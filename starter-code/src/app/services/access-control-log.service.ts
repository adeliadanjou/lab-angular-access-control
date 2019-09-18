import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
  
  logMessages: Array<Object> = [];

  constructor() { }

  addAccessItem(person, message){
    var accessObject = {person, message, createdAt: new Date()}
    this.logMessages.push(accessObject)
  }

  getAccesLog() {
    return this.logMessages
  }
}
