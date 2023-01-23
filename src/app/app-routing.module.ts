// Link ka dokumentaciji
// angular.io/guide/router-reference#router-outlet

// router-outlet specican tag gde iniciramo celu biblioteku da uopste aktiviramo rutiranje na nivou korene komponente ili app





import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { TrainingComponent } from "./training/training.component";
import { WelcomeComponent } from "./welcome/welcome.component";

//konstanti rute dodelio ceo mehanizam Routes, koji je dostupan preko modula router. 
const rute: Routes = [
    { path: '', component: WelcomeComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent},
    { path: 'training', component: TrainingComponent}
]
//Routing module koristimo u app modulu



@NgModule({
imports:[
RouterModule.forRoot(rute) //koji ce prolaziti metod kroz sve rute ( neka promenjiva rute), jer nemamo pravimo konstantu i pristupamo modulu router. Pravimo set objekata putanja.
],
exports:[
    RouterModule //ne moramo da exportujemo forRoot jer nek samo pravi putanje i radi u pozadini i samo da prosledi router modulu
]

})





export class RouthingModule{}