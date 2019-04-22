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
  selector: 'app-enter-daily-info',
  templateUrl: './enter-daily-info.component.html',
  styleUrls: ['./enter-daily-info.component.css']
})
export class EnterDailyInfoComponent implements OnInit {

  bodytemp: number;
  heartRate: number;
  bloodPressure: string;

  patientId: number;

  newInfo: any;

  constructor(private data: DataService, private router: Router, private storage: SessionStorageService) { }

  ngOnInit() {
  }

  onInfoEntered(){

    this.patientId = this.storage.retrieve('patient').patientId;


    this.data.enterDailyInfo(this.patientId, this.bodytemp, this.bloodPressure, this.heartRate)
    .subscribe(data => this.newInfo = data)

    this.router.navigate(['patient-page']);


  }
}
