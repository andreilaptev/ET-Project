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

  requestedPatient: object;
  authorizationError: boolean = false;

  answer: any;
  outsideAnswer: any;

  ngOnInit() {
  }


  onLogin(email, password){

    //this.requestLogin(email, password);

    this.data.patientLogin(email, password).subscribe(
      patient => {
        this.requestedPatient = patient      
        console.log(this.requestedPatient);
      
      })  


/*    this.data.testHttp().subscribe(
      data => {
        this.answer = data;
        console.log(this.answer);

        this.checkPass();
         
      }

       
    )    
*/
    this.checkPass();
    
  }
 
  checkPass(){
    console.log(this.requestedPatient);
     
  }
   
   
 /*
    if (this.requestedPatient === password) {

      this.router.navigate(['patient_page']);
    }
    else {
      this.authorizationError = true;
    }*/
  

  
  
}
