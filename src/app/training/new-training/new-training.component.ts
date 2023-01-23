import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent {
//eventEmitter koristimo da pokupimo vrednost iz new trainga ( generisem dogadjaj iz deteta roditeljskoj komponenti training)
  @Output() trainingStart = new EventEmitter<void>();  //pravimo dekorator koji ce osluskivati novi parametar. i koji ce biti novi osluskivac dogadjaja

//promenjiva za generisanje dogadjaja ( osluskivac) pravimo metod
//event emit se koristi za prosledjivanje svih dogadjaja izmedju razlicitih komponenti
//Output dekorator se koristi kad od deteta saljemo roditelju, a input roditelj => detetu i da vrati nazad informaciju
onStartTraining(){
  this.trainingStart.emit();
}




}



