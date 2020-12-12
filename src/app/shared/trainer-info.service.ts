import { Injectable } from '@angular/core';
import { Trainers } from './trainer.model';

@Injectable({
  providedIn: 'root'
})

export class TrainerInfoService {
  private trainer:Trainers[] = [
    new Trainers( 1, "Male","Andrew"),
    new Trainers( 2, "Male", "Brad"),
    new Trainers(3, "Male","Chad"),
    new Trainers(4, "Female","Andrea"),
    new Trainers(5, "Female", "Barbie"),
    new Trainers(6, "Female", "Charlie")
  ]

  constructor() { }

  getTrainers(){
    return this.trainer.slice();
  }
}
