import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";
import { concat } from 'rxjs/internal/observable/concat';
import { HttpClient } from '@angular/common/http';
import { Nurse } from '../nurse';
import { debug } from 'util';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patId: number;
  patient: any;

  constructor(private router: Router,private sessionStorage: SessionStorageService,
              private route: ActivatedRoute, private data: DataService) { 

                this.route.params.subscribe(params => this.patId = params.id)
              }

  ngOnInit() {

    
  };


  register(){
    this.router.navigate(['register']);
  }

  seeTips(){

    this.sessionStorage.store('id', 111);
    this.router.navigate(['see-tips']);
  }

  createEmergency(){
    this.router.navigate(['create-emergency']);
  }

  enterDailyInfo(){
    this.router.navigate(['daily-info']);
  }

  checkDisease(){
    this.router.navigate(['check-disease']);
  }

  seePrescriptions(){
    this.router.navigate(['prescription_page']);
  }
  seeVideo()
  {
    this.router.navigate(['video']);
  }
}
