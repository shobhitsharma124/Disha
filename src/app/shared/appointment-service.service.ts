import { Injectable } from '@angular/core';
import {Appointment} from "./appointment.model"

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  constructor() { }

    private app: Appointment[]=[
      new Appointment('ABC, Age: (22) , Email: abch@test.com', 'something,Borivali, Mumbai, Maharashtra, India', 'Rs 400', 'Trainer Preference: Male, Physio required: No', '1234567890'),
      new Appointment('JKL, Age: (42) , Email: jkl@test.com', 'something, Goregaon, Mumbai, Maharashtra, India', 'Rs 1500', 'Trainer Preference: Female, Physio required: Yes', '1234567890'),
      new Appointment('PQR, Age: (45) , Email: pqr@test.com', 'something, Andheri, Mumbai, Maharashtra, India', '-', 'Trainer Preference: Male, Physio required: No', '1234567890')
    ];

    getAppointments(){
      return this.app.slice();
    }
    
    addAppointment(app : Appointment){
      this.app.push(app);
    }
   
}
