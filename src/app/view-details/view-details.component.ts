import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  data:any;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }
  

  ngOnInit(): void {

    // this.route.queryParams.subscribe((params:any)=>{
    //   console.log(params);
    //   this.data = JSON.parse(params.data);
    // })
    this.getData()

  } 
  getData() {
    this.data = JSON.parse(localStorage.getItem('formdata'))
    console.log(this.data)
  }

}
