import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { concat } from 'rxjs/internal/observable/concat';
import { Patient } from '../patient';
import { fail } from 'assert';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';


@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  patientId: number;
  patient: object;
  email: string;
  bodyTemperature: number;
  heartRate: number;
  bloodPressure: number;

  title: string;
  body: string;
  
  mainMenu:boolean = true;
  signesRequested: boolean = false;
  tipsRequested: boolean = false;

  newSign: any;
  newTip: any;

  nurse: any;

  constructor(private route: ActivatedRoute, private data: DataService, private session: SessionStorageService) { 
    this.route.params.subscribe( params => this.patientId = params.id );
  }

  ngOnInit() {
    this.data.getPatient(this.patientId).subscribe(data => 
      {this.patient = data
      console.log(this.patient)
      
      })    
  }

  enterSignes(){
    this.mainMenu = ! this.mainMenu;
    this.signesRequested = true;
    this.tipsRequested = false;
  }

  onSignesEntered(){
    this.data.addClinicalSignes(this.patientId, this.bodyTemperature, this.bloodPressure, this.heartRate).subscribe(

      data => this.newSign = data

    )
  }

  makeTips(){

    this.mainMenu = ! this.mainMenu;
    this.signesRequested = false;
    this.tipsRequested = true;

  }

  onTipsEntered(){

    this.nurse = this.session.retrieve('nurse');
    this.data.makeNotivationalTip(this.patientId, this.title, this.body, this.nurse.id)
    .subscribe(
      data => this.newTip = data
    )
  }
}
