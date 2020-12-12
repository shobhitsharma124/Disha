import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Appointment } from '../shared/appointment.model';
import { AppointmentServiceService } from '../shared/appointment-service.service';
import { Component,ViewChild, OnInit} from '@angular/core';

@Component({
  selector: 'app-place-app',
  templateUrl: './place-app.component.html'
})

export class PlaceAppComponent implements OnInit{
  @ViewChild('f') slForm?: NgForm;
  amount :any;
  text: any ;
  f: FormGroup;

  constructor(private fb: FormBuilder,private appointmentService: AppointmentServiceService) { }

  ngOnInit() {
    this.f = this.fb.group({
      lastName:["",[Validators.required]],
      email: ['', [Validators.required,
        Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      firstName:["",[Validators.required]],
      phone:["",[Validators.required]],
      age:[""],
      address:[""],
      streetaddress:[""],
      city:[""],
      state:[""],
      zip:["",[Validators.required]],
      trainerpreference:[""],
      physiotherapist:[""],
      packages:[""]
    });
  }

  isValidInput(x): boolean {
    return this.f.controls[x].invalid &&
      (this.f.controls[x].dirty || this.f.controls[x].touched);
  }

  onSubmit(){
    const value = this.f.value;
    const name = value.firstName + " " + value.lastName +", Age: (" +value.age+") " +", Email: "+value.email;  
    const phone = value.phone;
    const fullAddress = value.address + "," + value.city + "-" + value.zip + "," + value.state ;
    const trainerPref = value.trainerpreference;
    const physioPref = value.physiotherapist;
    const trainer = "Trainer Preference: " + trainerPref + ", "+ "Physio required: " + physioPref;
    const trainerPackage = this.amount;

    const appointment = new Appointment(name,fullAddress,trainerPackage,trainer,phone);
    this.appointmentService.addAppointment(appointment);

    if (this.f.valid) {
       alert("Thank you! Your response has been recorded."); 
       console.log('Hua');
    }else{
       alert("Error! Please try again");
       console.log('Nahi Hua');
    }

    this.f.reset();
  }

  calculateAmt(amt : number){
    if(amt==0){
      this.text = " Payable amount will be informed via Phone Call";
    }
    else if(amt==1){
      this.amount = "Rs.500/-";
    }
    else if(amt==2){
      this.amount = "Rs.1600/-";
    }
    else if(amt==3){
      this.amount = "Rs.1500/-";
    }
    else{
      this.amount = 0;
    }
  }
}
