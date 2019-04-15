import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Patient } from '../patient';

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

}
