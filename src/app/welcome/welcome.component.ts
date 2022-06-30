import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  stateList: any = ['Maharashtra', 'Delhi', 'UP'] 

  form:any;

  public education: any[] = [{
    id: 1,
    university: '',
    grade: '',
    year: ''
  }];

  mydata:any;


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { 
    
    this.form = new FormGroup({
      
      firstName:new FormControl("",Validators.required),
      middleName:new FormControl(""),
      lastName:new FormControl("",Validators.required),
      fatherFName:new FormControl("",Validators.required),
      fatherMName:new FormControl(""),
      fatherLName:new FormControl("",Validators.required),
      motherFName:new FormControl("",Validators.required),
      motherMName:new FormControl(""),
      motherLName:new FormControl("",Validators.required),
      gender:new FormControl("",Validators.required),
      line1:new FormControl("",Validators.required),
      line2:new FormControl("",Validators.required),
      area:new FormControl("",Validators.required),
      pin:new FormControl("",Validators.required),
      city:new FormControl("",Validators.required),
      states:new FormControl(""),
      email:new FormControl("", [Validators.required, Validators.email]),
      countryCode:new FormControl("", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{2}$")]),
      phone:new FormControl("",[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      university:new FormControl("",Validators.required),
      grade:new FormControl("",Validators.required),
      year:new FormControl("",Validators.required),
      

    })

  }

  ngOnInit(): void {
    this.getData()
  }

  get f(){  
    return this.form.controls;  
  }  

  onSubmit(){
    let data:any=this.form.value;
    console.log(data)
    localStorage.setItem('formdata', JSON.stringify(data));
    this.router.navigate(['/view-detail'])

    // this.router.navigate(['/view-detail'],
    // {
    //   queryParams:{data:JSON.stringify(data)}
    // })
  }

  addEducation() {
    this.education.push({
      id: this.education.length + 1,
      university: '',
      grade: '',
      year: ''
    });
  }

  removeEducation(i: number) {
    this.education.splice(i, 1);
  }

  logValue() {
    console.log(this.education);
  }

  getData() {
    this.mydata = JSON.parse(localStorage.getItem('userdata'))
    console.log(this.mydata)
  }

}
