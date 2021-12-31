import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person';


@Injectable({
  providedIn: 'root'
})
export class AngularWayServiceService {

  constructor(private http: HttpClient) { }

  getPerson() {
    return this.http.get<Person[]>('assets/data.json');
  }
}
