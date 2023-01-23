import { AfterViewChecked, AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-previous-training',
  templateUrl: './previous-training.component.html',
  styleUrls: ['./previous-training.component.css']
})
export class PreviousTrainingComponent implements OnInit, AfterViewInit {

displayedColumns = ["date", "name", "duration", "calories", "status"]//imamo model i definicije i kako pristupamo podacima i unosenju u tabeli

exerciseSource = new MatTableDataSource<Exercise>();  //set podataka koji primenjujemo na kontejnerima i pozivamo iz exercise.model

// iz roota i pristupamo templejtu, celom modulu 
@ViewChild(MatSort) sort!: MatSort; // sort!: "!:" garantuje posle inicijalizacije da nece biti null u child elementu, nego da imati vrednost posle inicijalizacije parent elementa
@ViewChild(MatPaginator) paginator!: MatPaginator;

constructor(private trainingService: TrainingService) {} //konstruktor se prvo pita na ucitavanju stranice i nakon inicijalizacije povlaci stvari iz Training Service i private radi bezbednosti  


ngOnInit(): void{ //prva metoda posle constructora , i pristupa svim objektima
this.exerciseSource.data = this.trainingService.getExercises()   //pristupili smo svim podacima i pristupili privatnoj metodi u proslom koraku

}

//predefinisana metoda koja ide posle const>ngOnInit>ngAfterViewInit ima ih vise
ngAfterViewInit(){
  this.exerciseSource.sort = this.sort;
  this.exerciseSource.paginator = this.paginator;

}
doFilter(filterValue: string){
this.exerciseSource.filter = filterValue.trim().toLowerCase();
}

}
