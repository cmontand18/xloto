import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  tab = 1;

  constructor() { }

  ngOnInit(): void {
  }

  choosetab(number) {
    this.tab = number;
  }
}
