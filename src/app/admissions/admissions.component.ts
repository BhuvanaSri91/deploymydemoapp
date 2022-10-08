import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.css']
})
export class AdmissionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userEnteredValue = [];

  onSubmission(form:NgForm){
    this.userEnteredValue = form.value
    console.log(this.userEnteredValue)
  }

}
