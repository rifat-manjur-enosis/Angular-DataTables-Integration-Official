import { Component, OnInit,OnDestroy } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
import { Person } from '../person';
import { map } from 'rxjs/operators';
import {AngularWayServiceService} from '../angular-way-service.service';



@Component({
  selector: 'app-angular-way',
  templateUrl: './angular-way.component.html',
  styleUrls: ['./angular-way.component.css']
})

export class AngularWayComponent implements OnInit,OnDestroy {

  dtOptions: DataTables.Settings = {};
  persons: Person[] = [];

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  //dtTrigger: Subject<any> = new Subject<any>();

  constructor(private httpClient: HttpClient, public personService: AngularWayServiceService) { }
 

  ngOnInit(): void {
      this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.personService.getPerson()
      .subscribe((data:Person[]) => {
        console.log(data);
        this.persons = data;
        console.log(this.persons);
       // this.dtTrigger.next();
      });
  }

  ngOnDestroy(): void {
    //this.dtTrigger.unsubscribe();
  }

}
