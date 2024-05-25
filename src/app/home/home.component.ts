import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from '../employeeAPIServices/employee-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allEmployees:any[] = []

  constructor(private api:EmployeeApiService){}

  ngOnInit(): void {
    this.getAllEmployees()
  }

  getAllEmployees(){
    this.api.getAllEmployeeAPI().subscribe((result:any)=>{
      this.allEmployees = result.filter((user:any)=>user.id)
      console.log(this.allEmployees);
    })
  }

  deleteEmployee(id:any){
    this.api.removeEmployeeAPI(id).subscribe((result:any)=>{
      this.getAllEmployees()
    })
  }
}
