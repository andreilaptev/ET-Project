import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }  from '@angular/router';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  doPrescriptions(){
    this.router.navigate(['create_prescription']);
  }
  seePatientsList(){
    this.router.navigate(['list']);
  }

  seeClinicalInfo(){
    this.router.navigate(['clinical-info']);
  }

  enterSignes(){
    this.router.navigate(['enter-signes']);
  }

  makeTips(){
    this.router.navigate(['make-tips']);
  }

  seeEmergency(){
    this.router.navigate(['see-emergency']);
  }

  seePatientprescription(){
    this.router.navigate(['prescription_page']);
  }
}
