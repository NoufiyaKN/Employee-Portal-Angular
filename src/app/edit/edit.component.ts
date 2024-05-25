import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeApiService } from '../employeeAPIServices/employee-api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  employee:any = {}

  constructor(private route:ActivatedRoute, private api:EmployeeApiService, private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe((result:any)=>{
      console.log(result);
      const {id} = result
      console.log(id);
      this.getEmployeeDetails(id)
    })
  }
  
  getEmployeeDetails(id:any){
      this.api.getAEmployeeAPI(id).subscribe((result:any)=>{
        this.employee = result
        console.log(this.employee);
      })
    }

    cancel(id:any){
      this.getEmployeeDetails(id)
    }

  updateEmployee(){
    this.api.updateEmployeeAPI(this.employee).subscribe((result:any)=>{
      alert("User Updated Successfully!!!")
      this.router.navigateByUrl('/')
      console.log(result);
    })
  }
}
