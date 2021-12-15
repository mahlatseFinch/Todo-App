import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Todo List';
  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log("I am gonna be used to toggle");
  }

}
