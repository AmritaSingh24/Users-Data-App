import { Component, OnInit } from '@angular/core';
import { UsersDataService } from 'src/app/service/users-data.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  users:any;
  firstName:any;
  constructor(
    private userData : UsersDataService
  ) { 
    userData.users().subscribe((data)=> {
      this.users = data
      for(let data of  this.users){
        let name = data.name;
        let nameSplit = name.split(" ")
        if(nameSplit[0] == "Mr." || nameSplit[0] == "Mrs."){
          this.firstName = nameSplit[1];
        }else{
          this.firstName = nameSplit[0];
        }
      }
      
    });
  }
  
  ngOnInit(): void {}

}
