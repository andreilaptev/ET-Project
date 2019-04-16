import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpParams } from '@angular/common/http';
//import 'rxjs/Rx';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllPatients() {
    return this.http.get('http://localhost:8080/nurse/patients');
  }  

  registerPatient(patient){

    const body = {
      name: patient.name, 
      email: patient.email, 
      password: patient.password 
  };
    return this.http.post('http://localhost:8080/auth/patient-register', body);
  }

  getPatient(patientId){

  }

  patientLogin(email, password){
    const body = {
      email: email,     
      password: password 
  };

  /*let params = new HttpParams().set("req" , JSON.stringify(body));
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
   return  this.http.get('http://localhost:8080/auth/patient-login', {params: params});*/

   return  this.http.get('http://localhost:8080/auth/patient-login?email=' + email + '&password=' + password);

  }

  nurseLogin(email, password){
    const body = {
      email: email,     
      password: password 
  };
  return this.http.get('http://localhost:8080/auth/nurse-login?email=' + email + '&password=' + password);
  }

   
}
