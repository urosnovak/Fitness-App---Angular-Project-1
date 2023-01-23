import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training/stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

progress = 0;
timer: any;
showContinueButton = false;
showStopButton = false;


constructor(private dialog: MatDialog) {}



// ngOnInit se koristi u komponenti klasa kad zelimo da izvrsimo neku radnju posle legicke procedure i da nema vracanja u ciklus, stavljamo setInterval bez parametara i gde cemo proslediti
// i slusati progress samo i prikazuje vrednost i odma ce biti pri inicijalizaciji stranice
ngOnInit(): void {
 this.timer = setInterval(() => {
  this.progress +=5;
  if(this.progress >=100){
    clearInterval(this.timer);
  }
}, 1000)
} 

onStop(){
  clearInterval(this.timer)
  this.showContinueButton = true;
  this.showStopButton = true;
  const dialogRef=this.dialog.open(StopTrainingComponent, {
    data: {
      progress: this.progress
    }
  });
  dialogRef.afterClosed().subscribe(result => {
    // console.log(result);
    if (result) {
      clearInterval(this.timer) //pitamo sam rezultat
    } else {
      this.onContinue();
    }
  })
 

}
onContinue(){
  if(this.progress < 100){
  this.ngOnInit();
  this.showContinueButton = false;
  this.showStopButton = false;
 

  }
 
}

}

