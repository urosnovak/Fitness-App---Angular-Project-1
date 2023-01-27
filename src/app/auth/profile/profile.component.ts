import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
showPassword: boolean =false;
isEditing: boolean = false;
profileForInput!:User;
//MAT_DIALOG_DATA ZA PRIVREMENO SKLADISTENJE PODATAKA
constructor(@Inject(MAT_DIALOG_DATA) public data:any, public userService:UserService){}

ngOnInit(): void {
  this.profileForInput = {
    id: this.data.user.id,
    email: this.data.user.email,
    date: this.data.user.date,
    password: this.data.user.password,
    address: this.data.user.address
  };
}

finishEditing(form: NgForm){
  this.data.user.email = this.profileForInput.email;
  this.data.user.password = this.profileForInput.password;
  this.data.user.address = this.profileForInput.address;
  console.log(this.data.user);
  console.log(UserService.dummyUserList); // pratimo ceo user servis i celu listu
  this.isEditing = false;
}
toggleShowPassword(){
  this.showPassword = !this.showPassword;
}
}
// kad generisemo komponentu koristeci ng generator komponenti, izgenerisemo nesto sto cemo koristiti, i staviti u deklaracije 
// i nezavisno je totalno da li ce to staja i u entry komponenti koju zelimo pri uzitavanju odmah da imamo.
  //entry komponenta mora da stoji i u deklaracijama, da bi bila registrovana, a to sto mi stavljamo u entry je nezavisno jedno od drugog
//mehanizam pokretanja dela koda u trenutku kada pokrenemo neku komponentu, u cilju bolje optimizacije