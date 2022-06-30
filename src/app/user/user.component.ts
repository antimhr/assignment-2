import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  email:string;
  age:number;
  city:string;

  users:any;
  userdata:any;

  constructor(private user:UserdataService) {
    
    console.log("userdata", user.users())
    this.users = user.users()
    
    user.userDataAPI().subscribe((data)=>{
      console.log('data', data)
      this.userdata = data
    }); 
   } 

  ngOnInit(): void {
  }

  userFormData(data:any){
    this.user.saveUsers(data).subscribe((result) => {
      console.log(result)
    })
  }

}
