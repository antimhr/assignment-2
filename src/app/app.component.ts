import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-2';
  users:any;
  filter:string;

  constructor(private userdata: UserdataService)
  {
    this.users = userdata.users()
  }
}
