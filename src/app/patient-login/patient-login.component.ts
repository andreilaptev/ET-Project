import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";
import { concat } from 'rxjs/internal/observable/concat';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../patient';
import { debug } from 'util';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {  

  constructor(private data: DataService, private router: Router, private sessionStorage: SessionStorageService) { }

  requestedPatient: any;
  authorizationError: boolean = false;
  email: string;
  password: string;

  answer: any;
  outsideAnswer: any;

  ngOnInit() {
  }


  onLogin(){

    this.requestLogin();    
  }


 
  checkPass(){
    console.log(this.requestedPatient);
     
  }

    requestLogin(){
      this.data.patientLogin(this.email, this.password).subscribe(
        patient => {
          this.requestedPatient = patient      
          console.log(this.requestedPatient);

          debugger

          if (this.requestedPatient === null) {
            this.router.navigate(['patient-login']);
            this.authorizationError = true;
          }else            
              if (this.requestedPatient.password === this.password) {

                this.sessionStorage.store('id', this.requestedPatient._id);
                this.router.navigate(['patient_page']);
              }
              else {
                this.authorizationError = true;
              }

        
        })  
  
    }
  
  
}
