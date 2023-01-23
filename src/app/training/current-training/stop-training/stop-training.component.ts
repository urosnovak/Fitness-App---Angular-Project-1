import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-stop-training',
  templateUrl: './stop-training.component.html',
  styleUrls: ['./stop-training.component.css']
})
export class StopTrainingComponent implements OnInit {


  //Inject direktiva za ubacivanje podataka u deo gde radimo refenciranje gde treba da primimo taj podatak
  constructor(@Inject(MAT_DIALOG_DATA) public receivedData: any, private router:Router ) {}

ngOnInit(): void {

  }
  toWelcome() {
    this.router.navigate(['/']);
  }

}
