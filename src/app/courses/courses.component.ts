import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  courses = [
    {Slno:1, Course: 'B.E. in ECE', Intake: 130},
    {Slno:2, Course: 'B.E. in EEE', Intake: 110},
    {Slno:3, Course: 'B.E. in CSE', Intake: 180},
    {Slno:4, Course: 'B.Tech. in IT', Intake: 200},
    {Slno:5, Course: 'B.E. in Mech', Intake: 150}
  ]

}
