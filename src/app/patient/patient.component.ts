import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private router: Router,private sessionStorage: SessionStorageService) { }

  ngOnInit() {
  }


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
