import { Injectable } from "@angular/core";

export interface User {
    id:number;
    email: string;
    password: string;
    date:Date;
} 



@Injectable()
export class UserService {

currentUser: User = UserService.dummyUserList[0];


    static dummyUserList:Array<User> = [
        {
            id:0,
            email: "admin@mail.com",
            password: "123456789",
            date: new Date("2023-01-22 14:00")
        },
        {
            id:1,
            email: "ser@mail.com",
            password: "012345678",
            date: new Date("2023-01-23 13:00")
        }];
    
getUserName(user: User): string{
    return user.email;
}


getUserById(id: number) : User {
    var foundUser!: User;
    UserService.dummyUserList.forEach(user => {
if(user.id === id) {
    foundUser = user;
}

    });
    this.currentUser = foundUser;
    return foundUser;
} //generator vrednosti, dinamicki vracamo svakog korisnika po mehanizmu, napravio sam user id trazimo korisnika iz date liste, prolazimo kroz celu listu i napravili user da li je to taj user
getUser(userEmail: string) : User {
    // return UserService.dummyUserList.find(userToFind => userToFind.email === userEmail)!;  // skipujemo na kraju sa ! jer necemo uvek imati konstruktora, gore smo ga definisali pa pozvali.
this.currentUser = UserService.dummyUserList.find(userToFind => userToFind.email === userEmail)!;
return this.currentUser;

}
//provera validnosti naseg zamisa u formControl nad poljima za prijavu/registraciju 
isPasswordCorrect(userEmail: string, password:string): boolean {
    return UserService.dummyUserList.find(userToFind =>
        (userToFind.email === userEmail && userToFind.password === password)) != undefined;
} 
registerUser(email: string, password: string, date: Date) : User {
var maxId: number = 0;
UserService.dummyUserList.forEach(user => {
    if(maxId < user.id) {
        maxId= user.id;
    }
})
var id = ++maxId;
var user: User = {
    id,
    email,
    password, 
    date
}

UserService.dummyUserList.push(user);

this.currentUser = user;

console.log(user);
return user;

}

}
