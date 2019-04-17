import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";
import { concat } from 'rxjs/internal/observable/concat';
import { HttpClient } from '@angular/common/http';
import { Nurse } from '../nurse';
import { debug } from 'util';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-see-emergency',
  templateUrl: './see-emergency.component.html',
  styleUrls: ['./see-emergency.component.css']
})
export class SeeEmergencyComponent implements OnInit {

  emergencies: any;
 /* emergency = {

    "title": "Terrbile headache",
    "body": "Can't feel my body anymore",
    "patient_id": "5cb60129b60e05270b27a2d0",
    "createdAt": "2019-04-16T20:27:52.628Z",
    "updatedAt": "2019-04-16T20:27:52.628Z"

  };*/

  constructor(private data: DataService, private router: Router, private sessionStorage: SessionStorageService) { }

  ngOnInit() {

    this.data.seeEmergencyList().subscribe(
      data => this.emergencies = data

    )
  }

}
