import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

errorExists = false;
errorText = "";


constructor(private userService: UserService, private router: Router){}

ngOnInit():void {

}

onSubmit(form: NgForm){     //pristupam tagu angular forme i prosledi mi podatke te forme
  if (!this.userService.getUser(form.value.email)){
    this.errorExists = false;
//setovali smo greske po defaultu da su false i ako je u redu vraca redirekcija na home, ako nije pise error true ide poruka
    var newUser = this.userService.registerUser(form.value.email,
                                                form.value.password,
                                                form.value.birthDate);
  this.router.navigate(['']);
}else {
  this.errorExists = true;
  this.errorText = "User with this email already exists."
}
}

}