import { Component, OnInit } from '@angular/core';
import { UsersDataService } from 'src/app/service/users-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  getId: any; // for id
  users:any; // for user data
  firstName:any; 
  lastName: any;

  constructor(
    private usersData : UsersDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getId = this.route.snapshot.paramMap.get('id');
    this.usersData.userData(this.getId).subscribe((data:any)=>{
      this.users = data
      let name = this.users.name;
      let nameSplit = name.split(" ")
        if(nameSplit[0] == "Mr." || nameSplit[0] == "Mrs."){
          this.firstName = nameSplit[1];
          this.lastName = nameSplit[2];
        }else{
          this.firstName = nameSplit[0];
          this.lastName = nameSplit[1];
        }
    });
  }

}
