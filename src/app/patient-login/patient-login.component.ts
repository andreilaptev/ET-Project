import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";
import { concat } from 'rxjs/internal/observable/concat';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../patient';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {

  constructor(private data: DataService, private router: Router) { }

  requestedPatient: any;
  authorizationError: boolean = false;

  ngOnInit() {
  }


  onLogin(email, password){

    this.data.patientLogin(email, password).subscribe(
      data => {
        this.requestedPatient = data;
      
        console.log(this.requestedPatient);
      }
    )

    console.log(this.requestedPatient);
    if (this.requestedPatient.password === password) {

      this.router.navigate(['patient_page']);
    }
    else {
      this.authorizationError = true;
    }
  }
}
