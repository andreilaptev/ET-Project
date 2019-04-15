import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Data } from '@angular/router/src/config';
import { HttpClient } from 'selenium-webdriver/http';
import { Router } from '@angular/router';
import { Patient } from '../patient';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {

  constructor(private data: DataService, private router: Router) { }

  newPatient: Patient = new Patient(); 
  patient: any;

   
  ngOnInit() {
  }
 
  addPatient(newPatient){

    this.data.registerPatient(newPatient).subscribe(
      data => this.patient = data
    )
    console.log(this.patient);
    this.router.navigate(['/list']);
    
    //console.log(newPatient)

  }
}
