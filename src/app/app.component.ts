import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from './auth/profile/profile.component';
import { UserService } from './auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'fitness-app';

  profileOpened: boolean = false;
  
constructor(public userService:UserService, private dialog:MatDialog) {} // dovoljno da dohvatimo podatak i da ga iskoristimo u metodi dole openProfile


  openProfile(userId:number){
this.profileOpened = true;
const profileDialog = this.dialog.open(ProfileComponent, {
  disableClose: true,
  width:"25vw",
  data: {user:this.userService.getUserById(userId)}
}); //nakon sto je referenca pozvan i kad se desi zatvaranje dijaloga radim subscribe i hvatam podatak i prosledjujem rezultat
profileDialog.afterClosed().subscribe(result => {
  this.profileOpened = false;
})
  }
}
