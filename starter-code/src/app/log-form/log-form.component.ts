import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from 'app/services/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponent implements OnInit {
  errorMessage: string ;
  registredMessage = "Se ha registrado con éxito name y message!!";

  constructor(private accessControlService : AccessControlLogService) { }

  ngOnInit() {
  }

  addAccess(theForm){
 
    if(theForm.valid && theForm.dirty){
     
      return this.accessControlService.addAccessItem(theForm.value.name,theForm.value.message)
    }
    else {

      if(!theForm.value.name && !theForm.value.message){
        this.errorMessage = "Name y Message no pueden estar vacíos"
      }
      else {
        !theForm.value.name ? this.errorMessage ="Name no puede estar vacíos": this.errorMessage ="Message no puede estar vacío"
      }
    }

   
  }

}
