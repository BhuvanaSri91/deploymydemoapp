import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  results = [
    {Slno:1, Name: 'bhuvana', Branch: 'ece', Course: 'b.e', Year: 4, Result: '80%', Scholorship: '12000'},
    {Slno:2, Name: 'sindhu', Branch: 'ece', Course: 'b.e', Year: 4, Result: '85%', Scholorship: '14000'},
    {Slno:3, Name: 'amsha', Branch: 'ece', Course: 'b.e', Year: 4, Result: '83%', Scholorship: '13000'},
    {Slno:4, Name: 'mano', Branch: 'eee', Course: 'b.e', Year: 3, Result: '70%', Scholorship: '8000'},
    {Slno:5, Name: 'kani', Branch: 'it', Course: 'b.tech', Year: 3, Result: '75%', Scholorship: '10000'},
    {Slno:6, Name: 'priya', Branch: 'ei', Course: 'b.e', Year: 2, Result: '68%', Scholorship: '6000'},
  ]

}
