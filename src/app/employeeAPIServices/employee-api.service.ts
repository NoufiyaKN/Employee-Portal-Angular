import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {

  server_url="https://ep-server-angular.onrender.com"
  constructor(private http:HttpClient) { }

  saveEmployeeAPI(employee:any){
    return this.http.post(`${this.server_url}/employee`,employee)
  }

  getAllEmployeeAPI(){
    return this.http.get(`${this.server_url}/employee`)
  }

  getAEmployeeAPI(id:any){
    return this.http.get(`${this.server_url}/employee/${id}`)
  }

  updateEmployeeAPI(employee:any){
    return this.http.put(`${this.server_url}/employee/${employee.id}`,employee)
  }

  removeEmployeeAPI(id:any){
    return this.http.delete(`${this.server_url}/employee/${id}`)
  }
  
}