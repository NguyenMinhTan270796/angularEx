import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  jobCategories = ['technology', 'social', 'sciences', 'doctor'];
  newEmployee = new Employee(1, 'Hoang', new Date() , this.jobCategories[0]);
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  addNewEmployee() {
    this.newEmployee = new Employee(Math.floor(Date.now()), '', new Date(), '', '');
  }

  goBack() {
    this.location.back();
  }
  constructor(private location: Location) { }

  ngOnInit() {
  }

}
