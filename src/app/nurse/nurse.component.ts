import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

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

  seePatientprescription(){
    this.router.navigate(['prescription_page']);
  }
}
