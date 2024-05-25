import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from '../employeeAPIServices/employee-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  employee:any = {}
  allEmployees:any=[]

  constructor(private api:EmployeeApiService,private router:Router){}
  ngOnInit(): void {
    this.api.getAllEmployeeAPI().subscribe((result:any)=>{
      // console.log(result);
      this.allEmployees = result
    })
  }

  addEmployee(){
    const existingUser = this.allEmployees.find((item:any)=>item.id==this.employee.id)
    if(existingUser){
      alert("Id already exist!!! Use unique id to add user")
    }else{
      this.api.saveEmployeeAPI(this.employee).subscribe({
        next:(result:any)=>{
          console.log(result);
          alert(`${result.name} has successfully added to our DB`)
          this.router.navigateByUrl('/users')
        },
        error:(err:any)=>{
          console.log(err);
        }
      })
    }
  }

  cancel(){
    this.employee = {}
  }
}
