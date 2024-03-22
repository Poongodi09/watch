import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent  {


  
  contactForm = new FormGroup({ 
  name : new FormControl('',Validators.required),
  email : new FormControl('',Validators.required),
  mobile: new FormControl('',Validators.required),
  delivery: new FormControl('',Validators.required)

  });

  get name() {return this.contactForm.get('name')}
  get email() {return this.contactForm.get('email')}
  get mobile() {return this.contactForm.get('mobile')}
  get delivery() {return this.contactForm.get('delivery')}
  

 

  constructor(private notifyService : NotificationService) { }
  
 showToasterSuccess(){
      this.notifyService.showSuccess("Ordered successfully!!!","Success")
  }
  showToasterError(){
       this.notifyService.showError("Wrong fill again", "Error msg")
   }
   save()  {
 
    console.log(this.contactForm.value);
  
    if (this.contactForm.valid) 
    {
    this.showToasterSuccess()
    }
    else {
     this.showToasterError() 
    }
  
  }
}

