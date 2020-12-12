import { Component, OnInit } from '@angular/core';
import { AppointmentServiceService } from '../shared/appointment-service.service';
import { Appointment } from '../shared/appointment.model';

@Component({
  selector: 'app-view-app',
  templateUrl: './view-app.component.html'
})

export class ViewAppComponent implements OnInit {

  app? :Appointment[];
  constructor(private appointmentService: AppointmentServiceService) { }

  ngOnInit(): void {
    this.app = this.appointmentService.getAppointments();
  }
}
