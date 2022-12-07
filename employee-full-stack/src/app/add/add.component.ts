import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  code=""
  name=""
  designation=""
  salary=""
  companyName=""
  mobileNo=""
  username=""
  password=""

  constructor(private api:ApiService){}
   
  readValue=()=>
  {
    let emp:any = {
      
      "name":this.name,
      "code":this.code,
      "designation":this.designation,
      "salary":this.salary,
      "companyName":this.companyName,
      "mobileNo":this.mobileNo,
      "username":this.username,
      "password":this.password

    }
    console.log(emp)
    this.api.addEmployee(emp).subscribe(
      (response:any)=>
      {
        console.log(response)
      }
    )
  }

}
