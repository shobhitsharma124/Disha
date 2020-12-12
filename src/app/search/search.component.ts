import { Component, OnInit } from '@angular/core';
import {TrainerInfoService} from '../shared/trainer-info.service';
import {Trainers} from '../shared/trainer.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit {
  trainer?: Trainers[];
  
  constructor(private trainerService: TrainerInfoService) { }

  ngOnInit(): void {
    this.trainer = this.trainerService.getTrainers();
  }

  
}
