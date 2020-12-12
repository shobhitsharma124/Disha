import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required,
        Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      message:["",[Validators.required]]
    });
  }

  isValidInput(email): boolean {
    return this.contactForm.controls[email].invalid &&
      (this.contactForm.controls[email].dirty || this.contactForm.controls[email].touched);
  }

  onSubmit() {
    console.log(
      "LOG", this.contactForm.value
    );

    if (this.contactForm.valid) {
      alert("Thank you! Your response has been recorded."); 
    }
    else{
      alert("Error! Please try again")
    }
    this.contactForm.reset();

  }
}
