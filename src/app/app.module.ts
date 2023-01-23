import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { PreviousTrainingComponent } from './training/previous-training/previous-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { MaterialModule } from './material.module';
import { RouthingModule } from './app-routing.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { TrainingService } from './training/training.service';
import { StopTrainingComponent } from './training/current-training/stop-training/stop-training.component';
import { UserService } from './auth/user.service';
import { ProfileComponent } from './auth/profile/profile.component';

//Deklaracijamo definisemo komponente, Importima specifickih modula ili specificnih klasa koje smo oznacili kao module ngModul. u provajderima servise. bootstrap pokrece celu komponentu na pretrazivacu
@NgModule({   
  declarations: [  
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    PreviousTrainingComponent,
    NewTrainingComponent,
    StopTrainingComponent,
    ProfileComponent,
    
  
  ],
  imports: [
    BrowserModule,
    MaterialModule, //samo dodajemo import sa strane da ga zavede i bude registrovan
    RouthingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule     
    
  ],
  providers: [TrainingService, UserService],//servis nije komponenta i nema dekorator komponente i ne ide u dekorator nego za simulaciju podataka i ne pokrece nam se uz stranicu, nego ceka stranica od providera
  bootstrap: [AppComponent],
  entryComponents:[StopTrainingComponent, ProfileComponent] //mehanizam pokretanja dela koda u trenutku kada pokrenemo neku komponentu, u cilju bolje optimizacije
})
export class AppModule { }
