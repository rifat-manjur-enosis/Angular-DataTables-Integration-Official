import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-ajax',
  templateUrl: './with-ajax.component.html',
  styleUrls: ['./with-ajax.component.css']
})
export class WithAjaxComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
     // ajax: 'assets/data.json',
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }]
    };
  }

}
